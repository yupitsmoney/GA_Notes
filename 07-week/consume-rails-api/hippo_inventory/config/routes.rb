Rails.application.routes.draw do

    root 'hippos#index'

    get '/hippos' => "hippos#index"
    get '/hippos/:id' => "hippos#show"
    get '/hippos/:id/edit' => "hippos#edit"
    put '/hippos/:id' => "hippos#update"
    patch '/hippos/:id' => "hippos#update"
    get '/hippos/:id/delete' => "hippos#destroy"

end
