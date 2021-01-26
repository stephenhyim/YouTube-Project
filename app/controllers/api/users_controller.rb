class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        @user.birthdate = Date.new(2001,2,3) #remove this later
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
      params.require(:user).permit(:email, :password, :firstname, :lastname, :gender)
    end
    # add birthdate & nickname back to strong params

end
