module Api
    class HipposController < ApplicationController
        protect_from_forgery with: :null_session

        def index
            render json: Hippo.all, except: [:created_at, :updated_at]
        end

        def show
            render json: Hippo.find(params[:id]), except: [:created_at, :updated_at]
        end

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

        def update
            hippo = Hippo.find(params[:id])
            if hippo.update(hippo_params)
                render json: hippo, status: :ok, location: [:api, hippo]
            else
                render json: { errors: hippo.errors }, status: :unprocessable_entity
            end
        end

        def destroy
            hippo = Hippo.find(params[:id])
            hippo.destroy
            head :no_content
        end

        private

        def hippo_params
            params.require(:hippo).permit(:name, :age, :weight, :price)
        end

    end
end