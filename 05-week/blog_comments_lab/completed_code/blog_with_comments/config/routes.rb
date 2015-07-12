Rails.application.routes.draw do

    root "posts#index"

    get "/users" => "users#index", as: :users
    get "/users/new" => "users#new", as: :new_user
    post "/users" => "users#create", as: :create_user

    get "/sessions/new" => "sessions#new", as: :new_session
    post "/sessions" => "sessions#create", as: :create_session
    get "/sessions/destroy" => "sessions#destroy", as: :destroy_session

    get "/posts" => "posts#index", as: :posts
    get "/posts/new" => "posts#new", as: :new_post
    post "/posts" => "posts#create", as: :create_post
    get "/posts/:id" => "posts#show", as: :post

    post "/comments" => "comments#create", as: :create_comment

end
