# Build an API with Rails
---

## Learning Objectives
- Design API 
- Use Namespacing
- Build a Rails API

## Roadmap

1. API Review
2. Rails API Endpoints
3. Build our Rails API
4. LAB - Continue Building the API

### 1. API Review

You'll the term _API_ is used quite a bit in programming. Basically, an _Application Programming Interface_ specifies how software components should interact with each other through an interface. For example, the functions/methods documented in a library (jQuery, etc.) or services/functions that can be called on a computer's operating system are considered it's API - it's how our software interacts with that software component.

Software components can also expose data through an API. Exposing data formatted as JSON through _REST_ful endpoints is very common today.

What APIs have you seen in the last couple of weeks?

Our goal today is to create our own API using Rails. Our API will expose Hippo data, including the ability to add and edit Hippos, via a RESTful interface.

### 2. Rails API Endpoints

Our API's RESTful interface will look a lot like the routes (endpoints) that we've seen in our Rails apps.  However, there will be a few differences:

- Unlike our typical Rails routes, our API endpoints do not return HTML views.<br>__>>__
- It is customary to _namespace_ our endpoints by prepending the word "api" in the URI.  Some APIs version their endpoints like this "api/v1/" - __Why do they do this?__
- Not all routes that we are used to seeing in a Rails app are necessary.  We won't need the _#new_ or _#edit_ actions since we won't need to generate form/views, however, we will need their matching _#create_ and _#update_ actions to create and update our APIs data.

Let's review the REST to CRUD mappings we will use for our Hippo resource...<br>
__>>__

### 3. Build our Rails API

1. Our API app will start as usual:<br>
`
? rails new hippo_api -T -d postgresql
`
<br> then, `? rake db:create`
2. Generate our Hippo model:<br>
`? rails g model Hippo name age:integer weight:integer price:float`
<br> then, `? rake db:migrate`
3. This is how we set our namespace in the _routes.rb_ file:<br>
  
  ```ruby
  Rails.application.routes.draw do
  
      namespace :api do
        
      end

  end
  ```
4. Next, we're going to use `resources :hippos` to generate our routes. `resources` will, unless told otherwise, generate all of the routes necessary that map to the `index`, `show`, `new`, `create`, `edit` and  `update` actions of the controller.  However, in a Rails API, the `new` and `edit` actions are not needed - __Why?__.  We can prevent any routes that we don't want to be generated with the `:except` modifier like so:<br>

  ```ruby
  Rails.application.routes.draw do
  
      namespace :api do
          resources :hippos, except: [:new, :edit]
      end
  
  end
  ```
  If you `rake routes` you will see that our RESTful routes are being generated thanks to `resources` and there's no useless `new` or `edit` actions cluttering things up.
5. With our routes in place, it's time to move on to our controller. We're going to code our controller by hand, but here's the catch, we need to create an "extra" folder inside the _controllers_ folder - so lets do that `? mkdir app/controllers/api`.<br>Now lets create our controller file using the standard Rails naming convention `? touch app/controllers/api/hippos_controller.rb`.<br>We'll code our controller as usual with one important difference, we will define the class within a _module_.  Modules are used to group related classes and other code together.  In addition, Rails will use the module name in the path to find our controller!<br>

  ```ruby
  module Api
      class HipposController < ApplicationController
          protect_from_forgery with: :null_session

      end
  end
  ```
  Changing the `protect_from_forgery with:` from the standard value we're used to seeing, `:exception`, to `:null_session`, allows any non-Rails client, including mobile devices to call our API.

6. 
 __>>__<br>
 If we forgot what actions we need, what can we do to find them?:
 
   ```ruby
  module Api
      class HipposController < ApplicationController
          protect_from_forgery with: :null_session
          
          def index
          end
          
          def show
          end
          
          def create
          end
          
          def update
          end
          
          def destroy
          end

      end
  end
  ```
  
7. Lets code our _index_ action to return all of our data:

   ```ruby 
      def index
          render json: Hippo.all
      end
  ```
  
  If we've done our job correctly so far, we can spin up our Rails server and browse on over to `localhost:3000\api\hippos` and we should receive an empty JSON array.
  
8. Remember, our API is all about OUR data. So let's seed some data! Here's a [link to a gist](https://gist.github.com/jim-clark/78cf1cd4f7ab445bcd41) with code you can paste into your _seeds.rb_ file that will create 50 hippos.

  Run `rake db:seed`, then refresh that browser and check it out!

9. Show time!  Literally.
  
  ```ruby 
      def show
          render json: Hippo.find(params[:id])
      end
  ```
  ...and a URL to test it `localhost:3000\api\hippos\5` - displays the JSON for the hippo with an id of 5.
  
10. There are several ways to limit the data fields returned by our API.  Here's an easy option as shown in our _index_ action, however, it can easily be used whenever you use `render json:`

  Let's use the `:except` option to specify fields you don't want returned to the client: 

  ```ruby
     def index
         render json: Hippo.all, except: [:created_at, :updated_at]
     end
  ```
  Browse it and you'll notice no more `created_at`, or `updated_at` being returned.
  
  You can also use the `only:` to specify the fields only to return.

11. Create a Hippo!

  __>>__

  
  ```ruby
    def create
        hippo = Hippo.new(hippo_params)
        if hippo.save
            # :created = status code of 201
            render json: hippo, status: :created, location: [:api, hippo]
        else
            # :unprocessable_entity = status code of 422
            render json: { errors: hippo.errors }, status: :unprocessable_entity
        end
    end

    private

    def hippo_params
        params.require(:hippo).permit(:name, :age, :weight, :price)
    end
  ```
  
  Notice that we are returning the REST preferred status codes, and in the case of a successful creation, the newly created resource, and the URL that maps to that resource.  This is a best practice and some frameworks such as AngularJS's $resource service requires the created resource to be returned to work properly.
  
  Since we can't use the browser to easily send a `POST` request to the server, we're going to use our friend _Postman_ to POST this JSON to the server and create a new Hippo:
  
  ```json
  {"hippo": {"name": "Test Hippo", "age": 99, "weight": 1111, "price": 1234.56}}
  ```
  
### 4. LAB - Continue Building the API

Congrats, we've completed the Read (_index & show_) and Create (_create_) parts of our API. In this lab, you'll finish building your API by adding the Update (_update_) and Delete (_destroy_) parts.

The link in the _References_ below contains a list of status codes from which to choose from to return.  Google "REST status codes" for which ones are appropriate.

Also, the `update` and `destroy` actions should return the _modified_ and _destroy_, respectively.

## References

[Rails Rendering & Status Code Docs](http://guides.rubyonrails.org/layouts_and_rendering.html)

## Essential Questions

Given this code inside the _routes.rb_ file:

```ruby
Rails.application.routes.draw do
  
    namespace :api do
        resources :bunnies, except: [:new, :edit]
    end

end
```

Write the routes that will be automatically generated by Rails.  Hint: There are six of them with the `bunnies#update` action have two routes.

