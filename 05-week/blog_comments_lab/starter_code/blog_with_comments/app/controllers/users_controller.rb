class UsersController < ApplicationController

    def index
        @users = User.all
    end

    def new
        @user = User.new
    end

    def create
        if User.create(user_params).valid?
            flash["alert-success"] = "You have been registered"
            redirect_to users_path
        else
            flash["alert-warning"] = "Unable to register you"
            redirect_to new_user_path
        end
    end

private

    def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end

end
