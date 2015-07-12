Rails.application.routes.draw do
  
  root 'markers#index'

  post '/add_marker' => 'markers#add_marker'
  delete '/remove_all' => 'markers#remove_all'
  delete '/remove_last' => 'markers#remove_last'

end
