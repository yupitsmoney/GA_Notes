class HipposController < ApplicationController

    @@base_url = 'http://localhost:3001/api/hippos'

    def index
        @hippos = JSON.parse(HTTParty.get(@@base_url).response.body).to_a
    end

    def show
        @hippo = JSON.parse(HTTParty.get(@@base_url + '/' + params[:id]).response.body)
    end

    def edit
        @hippo = JSON.parse(HTTParty.get(@@base_url + '/' + params[:id]).response.body)
    end

    def update
        @hippo = HTTParty.put(@@base_url + '/' + params[:id], 
                    body: {
                        id: params[:id].to_i,
                        age: params[:age].to_i, 
                        weight: params[:weight].to_i, 
                        price: params[:price].to_f
                    }.to_json,
                    headers: {
                        'Content-Type' => 'application/json',
                        'Accept' => 'application/json'
                    }).response.body
        redirect_to '/hippos'
    end

    def destroy
        HTTParty.delete(@@base_url + '/' + params[:id], 
                    headers: {
                        'Content-Type' => 'application/json',
                        'Accept' => 'application/json'
                    })
        redirect_to '/hippos'
    end

end
