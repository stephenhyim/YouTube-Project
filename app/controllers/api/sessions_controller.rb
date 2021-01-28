class Api::SessionsController < ApplicationController
    def create
      
        @user = User.find_by_credentials(
          params[:user][:email],
          params[:user][:password]
        )
        # debugger
        if @user
          login(@user)
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
          render "api/users/show"
        else
          # debugger
          render json: ["No current user"], status: 404
        end
      end
end


#NEED TO CREATE TWO FORMS 1. Login (username) and 2. Login (password) 
