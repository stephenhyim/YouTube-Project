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

  private

    def user_params
      params.require(:user).permit(:email, :password, :firstname, :lastname, :gender, :birthdate)
    end
    # add birthdate & nickname back to strong params

end
