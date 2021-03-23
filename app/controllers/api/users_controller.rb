class Api::UsersController < ApplicationController
    def create
      # debugger
        @user = User.new(user_params)
      # debugger
      if @user.save
        # debugger
        login(@user)
        @user_video = @user.videos
        render "api/users/show"
      else
        render json: @user.errors.full_messages, status: 422
      end
    end

    def show 
      @user = User.find(params[:id])
      if @user 
        @user_video = @user.videos
        render :show
      else  
        render json: @user.errors.full_messages, status: 404
      end
      
    end

  private

    def user_params
      params.require(:user).permit(:email, :password, :firstname, :lastname, :gender, :birthdate, :nickname)
    end
    

end
