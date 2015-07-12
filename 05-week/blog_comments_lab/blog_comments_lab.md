# Blog with Comments Lab
---

#### This lab will allow you to practice creating a Rails app that has three related models:
- User
- Post
- Comment

#### The app will also incorporate user authentication that you learned yesterday.

## Lets Do This

#### Here is the overall process to build out the app:

### Setup the starter code

Copy the starter code from the repo into a new working directory. The app is very similar to where we left off yesterday.

`cd` into your new `blog_with_comments` directory, then `bundle install` to install the gems, `rake db:create` and `rake db:migrate` to setup the database.

### Test that all is well

Before moving on, lets ensure that the app is working correctly by starting your rails server and opening in your browser.

Add two new users.

Log in and log out using one of the users you just created.

### Add the _Post_ model

Our blog app will display multiple posts which are created by the currently logged in user.

Lets first generate the _Post_ model with two attributes, _title_ & _body_, and _user:references_:

```
$ rails g model Post title body user:references
```

The _user:references_ will add `belongs_to :user` to the `Post` model and a `user_id` foreign key in the `posts` table when we run the migration, lets do that now: `rake db:migrate`

Where there's a `belongs_to`, there's a matching `has_many` or `has_one` so that ActiveRecord can do its magic no matter which of the two models you're using.  Lets modify the _User_ model to tell Rails that Users might have many Posts:

```ruby
class User < ActiveRecord::Base
    
    has_secure_password
    validates :email, presence: true, uniqueness: { case_sensitive: false }

    has_many :posts

end
```

### Add a controller for Posts

As usual, we will need a controller to get CRUDy with our Posts:

```
$ rails g controller posts
```

Our app's main page will be displaying all of the posts, for that we need an _index_ action!

```ruby
class PostsController < ApplicationController

    def index
        @posts = Post.all
    end
    
end
```

### Add a view to display the app's Posts

Create a _index.html.erb_ file inside of the _views/posts_ folder.

Feel free to display the Posts how you see fit. Here's some inspiration if you need it:

```ruby
<h1 class="jumbotron">Welcome to the DTLA WDI Blog</h1>

<% if @posts.count > 0 %>
    <% @posts.each do |post| %>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3><%= post.title %></h3>
                <h6>Posted by: <%= post.user.name %>&nbsp;&nbsp;<small><%= post.updated_at%></small></h6>
            </div>
            <div class="panel-body">
                <p><%= post.body %></p>
            </div>
        </div>
    <% end %>
<% else %>
    <h2>No Posts Exist</h2>
<% end %>
```

Since this view will be our main page, lets update our _routes.rb_ to display it by default when users browse to the site:

```ruby
    root "posts#index"
```

### Create Posts!

Often, when adding functionality to your Rails app, it helps to start with what the user will interact with in a view, such as clicking on a link, which would send a request to our app's router, that forwards the request to the appropriate controller#action, and usually ends with a new view being sent back to the browser.

#### Adding a link to the Posts index view

We only want to allow logged in users to create posts, so lets only show our link if this is the case:

```ruby
<h1 class="jumbotron">Welcome to the DTLA WDI Blog</h1>

<% if current_user %>
    <%= link_to "Add New Post", new_post_path %>
    &nbsp;&nbsp;|&nbsp;&nbsp;
    <%= link_to "Logout", destroy_session_path %>
<% else %>
    <%= link_to "Login", new_session_path %>
<% end %>
<hr>

<!-- remaining of html/erb code below -->
```

#### Add the routes for Posts

Now for the routes. To start with, we will need three routes very similar to those for _users_. Copy those, and modify them to look like this:

```ruby
    get "/posts" => "posts#index", as: :posts
    get "/posts/new" => "posts#new", as: :new_post
    post "/posts" => "posts#create", as: :create_post
```

We also need to update our sessions controller actions to redirect to the posts_path instead of users_path.  In the views, update all instances of

`redirect_to users_path` to be `redirect_to posts_path` instead.

#### Add the _new_ action

When a user clicks on the _Add New Post_ link, we will be routed to the _new_ action. Time to create it.  You've got this...

#### Add _new.html.erb for the new post

The _new_ action will be looking for the _new.html.erb_ view.  Time for you to create it.

Hint: it will be similar to the new user view.  However, be sure  the _url:_ on the _form\_for_ is set to _create\_post\_path_.

It would also make sense to use a _text\_area_ instead of _text\_field_ for the post's body.

#### _create_ action

Lets make the _create_ action that will be receiving the new post:

```ruby
    def create
        post = Post.new(post_params)
        if post.valid?
            current_user.posts.push post
            current_user.save
            redirect_to posts_path
        else
            flash["alert-warning"] = "Sorry, post not created"
            redirect_to new_post_path
        end
    end
```

Note how we create a new post and push it into the current\_user's posts array. Calling save on current_user then saves the newly created post too - sweet!

#### Displaying a link to view/add Comments

With each post, lets display a link that will move to a _show_ view for that post which will display the post's current comments and present a form for new comments.  Modify the _index.html.erb_ for posts like this:

```ruby

...
            <div class="panel-body">
                <p><%= post.body %></p>
            </div>
            <div class="panel-footer">
                <% if current_user
                    add = "/Add"
                else
                    add = ""
                end %>
                <%= link_to "View#{add} Comments", post_path(id: post.id) %>
            </div>
```

We'll need to add this route too!

```ruby
    get "/posts/:id" => "posts#show", as: :post
```

Lets create the _show_ action in the posts controller:

```ruby
    def show
        @post = Post.find(params[:id])
    end
```

Now for the _show.html.erb_ view:

```ruby
<h1 class="jumbotron">Welcome to the DTLA WDI Blog</h1>

<%= link_to "Return to All Posts", posts_path %>

<hr>

<div class="panel panel-default">
    <div class="panel-heading">
        <h3><%= @post.title %></h3>
        <h6>Posted by: <%= @post.user.name %>&nbsp;&nbsp;<small><%= @post.updated_at%></small></h6>
    </div>
    <div class="panel-body">
        <p><%= @post.body %></p>
    </div>
    <div class="panel-footer">
        <h4>Comments</h4>
        <% if @post.comments.count > 0 %>
            <% @post.comments.each do |comment| %>
                <div class="panel panel-default">
                    <div class="panel-body">
                        <p><%= comment.body %></p>
                        <h5><%= comment.user.name %>&nbsp;&nbsp;<small><%= comment.updated_at %></small></h5>
                    </div>
                </div>
            <% end %>
        <% else %>
            <p>No Comments Yet</p>
        <% end %>
    </div>
</div>
<hr>

<% if current_user %>
    <%= form_for @comment, url: create_comment_path do |f| %>
        <%= hidden_field_tag :post_id, @post.id %>
        <div class="form-group">
            <%= f.label :body, "Comment" %>
            <%= f.text_area :body, class: "form-control" %>
        </div>
        <%= f.submit "Add Comment", class: "btn btn-default" %>
    <% end %>
<% end %>

```

Great, but this won't work until we get our _Comment_ model created...

### Create Comments

#### First, the model

Generate a _Comment_ model in a similar way to the _Post_ model. We only need a `body` attribute this time, however, since comments belong to both a user and a post, we need two references: `post:references` and `user:references`.

Don't forget to modify both the _User_ and _Post_ models to include a _has\_many_ relationship to _:comments_.

Rake that migration!

#### Then the route

We only need one route for creating comments:

```ruby
    post "/posts/:id/comments" => "comments#create", as: :create_comment
```

#### Comments controller

Lastly, create a Comments controller with only a _create_ action, but don't use the generator since we don't need any views for comments in our app:

```ruby
class CommentsController < ApplicationController

    def create
        comment = Comment.new(body: params[:comment][:body])
        post = Post.find(params[:post_id])
        if comment.valid? && post
            post.comments.push comment
            post.save
            current_user.comments.push comment
            current_user.save
            redirect_to posts_path
        else
            flash["alert-warning"] = "Sorry, comment not created"
            redirect_to posts_path
        end
    end

end
```

#### Be sure to create Posts & Comments while being logged in as different users. Congrats!

## Bonus

#### Add ability for users to edit their own posts and comments.

#### Use a before_action throughout the controllers as necessary to prevent access to users that are not logged in.

#### Improve the navigation between the pages with a header at the top of the page.

#### Display the logged in user's name in the header.