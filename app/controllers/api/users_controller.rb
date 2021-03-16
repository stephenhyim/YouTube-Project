class Api::UsersController < ApplicationController
    def create
      # debugger
        @user = User.new(user_params)
      # debugger
      if @user.save
        # debugger
        login(@user)
        render "api/users/show"
      else
        render json: @user.errors.full_messages, status: 422
      end
    end

    def show 
      @user = User.find_by(email:user_params(:email))
      if @user
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
    end

  private

    def user_params
      params.require(:user).permit(:email, :password, :firstname, :lastname, :gender, :birthdate, :nickname)
    end
    

end
