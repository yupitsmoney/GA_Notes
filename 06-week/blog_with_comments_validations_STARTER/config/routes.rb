Rails.application.routes.draw do

  root "users#index"

  get "users" => "users#index", as: :users
  post "users" => "users#create", as: :create_user
  get "signup" => "users#new", as: :new_user

  #routes for login
  get "login" => "sessions#new", as: :new_session
  post "login" => "sessions#create", as: :create_session
  delete "logout" => "sessions#destroy", as: :destroy_session

  get "/posts" => "posts#index", as: :posts
  get "/posts/new" => "posts#new", as: :new_post
  post "/posts" => "posts#create", as: :create_post
  get "/posts/:id" => "posts#show", as: :post

  post "/comments" => "comments#create", as: :create_comment

end
