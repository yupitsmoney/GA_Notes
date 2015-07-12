<img src="oauth-2-sm.png" width="50">
# OAuth (2.0)
---

## Learning Objectives
Students will be able to:

- Understand how OAuth works
- Use OAuth in their own apps

## Roadmap
- Why OAuth
- How it Works
- Example Site
- Use OAuth in Your App

### Why OAuth?

How many websites have you signed up with?**

What are the pitfalls of this from both a user and website/developer perspective?**

- As a User:
  - Creating multiple logins requires you to remember and manage all of those login usernames/emails & passwords.
  - You will often use the same credentials across multiple sites, so if there's a security breach at one of the sites where you are a member, the hackers know that users often use the same credentials across their sites...
  - You are tempted to use simple/weak passwords so that you can remember all of them.
- As a Website or Developer:
  - Managing users' credentials requires lots of carefully crafted security related code.
  - Users are annoyed by having to create accounts, especially for entertainment or personal interest type websites.
  - Managing credentials makes your site a target for hackers (internal and external).

So what's a web developer to do - __OAuth to the rescue!__

### How it Works

#### What is OAuth?

OAuth is an open standard that provides __client applications__ access to __resources__ on a server with the owner of the resources permission to do so.

#### The OAuth Process

The following diagram illustrates the OAuth Process:

<img src="oauth-flow.jpeg" width="800">

__Discuss: OAuth process__

The ultimate goal is for the client application to obtain an __access token__ from an OAuth authentication server that allows the app to access the user's resources from that server's API's.

### Example Site

Firebase made using OAuth authentication very easy.  So easy in fact, I used it to identify users of my Tic-Tac-Toe app:

[TIC-TAC-TOE X 9](https://tic-tac-toe-x-9.firebaseapp.com)

It uses GitHub's OAuth service to authenticate those who want to play.  Go ahead and sign in by clicking on the "Sign In with GitHub" button.

GitHub will present you with a dialog to authorize the TIC-TAC-TOE to access your GitHub info.

You will be able to revoke your authorization at any time, so go ahead and click the green "Authorize application" button.

You are then logged in and can play the game.

To revoke TTT's authorization, go to settings in GitHub, click on "Applications", then click the "Revoke" button next to the TTT app.

### Use OAuth in Your App

#### Goal

Our goal is to replace our custom user authentication used in the Blog with Comments app from last week with, in this case, Google's OAuth authentication service.

#### Prep

##### 1. Copy starter code

  - Copy the starter code from the student repo's 06-week/OAuth folder into a working directory.
  - CD into that project's directory and run `bundle install`.  
  - Run the Rails development server, `rails s`, and make sure the app loads in a browser.
  - If a user is logged in, log them out!  Failure to do so may result in the app showing an error at startup later.

##### 2. Create an OAuth client ID for your app by registering with Google's OAuth Service

From the OAuth prospective, your application is the client and it will to be registered with Google in order to secure a __Client ID__ and a __Client secret__.

  - To obtain the credentials for your app, go to the [Google Developers Console](https://console.developers.google.com/project) and log in with a Google account if necessary.
  - Click on the "Create Project" button and enter a name that's acceptable with Google.
  - For the gem that we are going to use, we have to enable a couple of Google's APIs. In the left sidebar, click on "APIs".
  - Under "Google Apps APIs", click on "Contacts API", then click the "Enable API" button.
  - Click on "APIs" again in the sidebar and this time enable the "Google+ API".
  - In the sidebar, click on "Credentials", then click the blue "Create new Client ID" button.
  - Accept the default Application type of "Web application" and click "Configure consent screen".
  - Complete the required "Product name" field with something like "Blog with Comments", then click the "Save" button. 
  - For "Authorized JavaScript origins" enter `http://localhost:3000`  For "Authorized redirect URIs" enter `http://localhost:3000/auth/google_oauth2/callback` then click the "Create Client ID" button.
  - You will see the credentials generated for your app.  Keep this page handy as we will soon be using this info.

#### Code

##### 1. Modify the User model

We're going to modify our User model to make it compatible with a gem that makes using OAuth in Rails relatively simple - __OmniAuth__.

In Rails, we modify the database tables for our models with migrations ([Rails ActiveRecord Migrations](http://edgeguides.rubyonrails.org/active_record_migrations.html)).

  - Currently, the database table for our User model has two columns that we won't be using: `password_digest` and `email`.  Here's the migration to type into Terminal to remove them:

  ```
  $ rails g migration RemovePasswordDigestFromUsers password_digest
  ```
  and
  
  ```
  $ rails g migration RemoveEmailFromUsers email
  ```

  - Then we need to add four columns required by the _OmniAuth_ gem:

  ```
  $ rails g migration AddOauthToUsers provider uid oauth_token oauth_expires_at:datetime
  ```
  - Now we can run the migrations: `$ rake db:migrate`.
   
   If all went well, you will see the new attributes for the _users_ table in the _schema.rb_ file.

  - Inside of our User model file (_user.rb_) we can remove the `has_secure_password` and the validations since we will no longer be signing up new users ourselves!

##### 2. Install and configure the OAuth gem

  - Lets install the gem that will ease using OAuth in our app.  Add this in your Gemfile:

   ```ruby
   gem 'omniauth-google-oauth2'
   ```
   What do we have to do after we make changes to our _Gemfile_? - `bundle install`!
  - This gem needs to be initialized and in Rails we do this by creating an _initializer_.  Create a file named _omniauth.rb_ inside the _config/initializers_ folder.
  - Put this code in the _omniauth.rb_ file you just created:
   
   ```ruby
   OmniAuth.config.logger = Rails.logger

	Rails.application.config.middleware.use OmniAuth::Builder do
  		provider :google_oauth2, 'my Google client id', 'my Google client secret'
	end
   ```
  - Replace the "my Google client id" with the client ID and "my Google client secret" with the Client secret you obtained for your app using Google's Developer Console.

##### 3. Add the OAuth routes

In our _routes.rb_, we need to add three routes required by _OmniAuth_ to replace the current "/sessions" routes:

```ruby
	
	# replace these three routes
 	# get "/sessions/new" => "sessions#new", as: :new_session
  	# post "/sessions" => "sessions#create", as: :create_session
  	# get "/sessions/destroy" => "sessions#destroy", as: :destroy_session
	
	# with these three OAuth routes
	get 'auth/:provider/callback', to: 'sessions#create'
 	get 'auth/failure', to: redirect('/')
 	get 'signout', to: 'sessions#destroy', as: 'signout'
```

##### 4. Add a method to our User model required by the OmniAuth gem

The following method needs to be added to our User model.  The code will take data returned by Google's OAuth service and save it in the database for each user signing in with OAuth.

If the user does not exist in our database, the code will create a new user.

The code in our _user.rb_ file should now look like this:

```ruby
class User < ActiveRecord::Base

    has_many :posts
    has_many :comments

    def self.from_omniauth(auth)
        where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
            user.provider = auth.provider
            user.uid = auth.uid
            user.name = auth.info.name
            user.oauth_token = auth.credentials.token
            user.oauth_expires_at = Time.at(auth.credentials.expires_at)
            user.save!
        end
    end

end
```

##### 5. Update the _SessionsController_

Our existing code in our _ApplicationController_ is golden, however, we need to tweak the _SessionsController_ to grab the user info from OmniAuth.

The _create_ method in _sessions_controller.rb_ is simplified to this:

```ruby
    def create
        user = User.from_omniauth(env["omniauth.auth"])
        session[:user_id] = user.id
        flash["alert-success"] = "You have been logged in"
        redirect_to posts_path
    end
```

##### 6. Update our sign in UI

Now that our OAuth is hooked up, lets update our Login and Logout links in the _posts/index.html.erb_ file:

   - The link_to "Logout" code on line 6 should be changed to:

   ```ruby
   <%= link_to "Sign Out", signout_path, id: "sign_out" %>
   ```
   - The link_to "Login" code on line 8 should be changed to:

   ```ruby
   <%= link_to "Sign in with Google", "/auth/google_oauth2", id: "sign_in" %>
   ```
   - Thanks to OAuth, we no longer sign up users, so lets remove these lines (10 & 11):

   ```ruby
   &nbsp;&nbsp;|&nbsp;&nbsp;
	<%= link_to "Add New User", new_user_path %>
   ```
   
   - Finally, to show that our OAuth is working, let's display our signed in user's name by adding this line just below line 3:

   ```ruby
    <div>Signed in as <strong><%= current_user.name %></strong>!</div>
   ```

#### Try it out!

Spin up your rails server, browse to localhost:3000 and click the "Sign in with Google" link.

You will be redirected to Google's consent page, then redirected back when you approve.

Congrats, you just added the ability for your users to sign in to your app via OAuth!

#### Remove obsolete code (optional)

There's plenty of code we can remove since we won't be managing users anymore.

  - You can remove all three "/users..." routes in _routes.rb_.

  ```ruby
    # get "/users" => "users#index", as: :users
    # get "/users/new" => "users#new", as: :new_user
    # post "/users" => "users#create", as: :create_user
  ```

  - We don't even need a _UsersController_ anymore!  Feel free to delete the _users_controllers.rb_ file.

  - No _UsersController_?  Heck no more user views either!  You can delete the entire _users_ folder from the _views_ folder.
  - Since we are not using `has_secure_password`, we can re-comment out the _bcrypt_ gem in our Gemfile.

## References

[OAuth Official Site](http://oauth.net/2/)

[OmniAuth - Google](https://github.com/zquestz/omniauth-google-oauth2)

[OmniAuth](https://github.com/intridea/omniauth)

[Rails ActiveRecord Migrations](http://edgeguides.rubyonrails.org/active_record_migrations.html)

