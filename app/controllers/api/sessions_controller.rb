class Api::SessionsController < ApplicationController
    def create
      
      @user = User.find_by_credentials(
        params[:user][:email],
        params[:user][:password]
      )
      # debugger
      if @user
        login(@user)
        @user_video = @user.videos
        render "api/users/show"
      else
        # debugger
        render json: ["Wrong password. Try again or click Forgot password to reset it."], status: 401
      end
    end

    
    
    def destroy
      @user = current_user
      if @user
        logout
      else
        # debugger
        render json: ["No current user"], status: 404
      end
    end
end
