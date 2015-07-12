class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by(email: params[:login][:email])

    if user
      session[:user_id] = user.id.to_s
      redirect_to posts_path
    else
      redirect_to new_session_path
    end
  end

  def destroy
    session.delete(:user_id)
    redirect_to users_path
  end
  
end