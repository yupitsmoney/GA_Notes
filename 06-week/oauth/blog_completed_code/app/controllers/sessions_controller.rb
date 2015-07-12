class SessionsController < ApplicationController

    def new
        @user = User.new
    end

    def create
        user = User.from_omniauth(env["omniauth.auth"])
        session[:user_id] = user.id
        flash["alert-success"] = "You have been logged in"
        redirect_to posts_path
    end

    def destroy
        session[:user_id] = nil
        flash["alert-success"] = "You have logged out"
        redirect_to posts_path
    end

private

    def user_params
        params.require(:user).permit(:email, :password)
    end

end