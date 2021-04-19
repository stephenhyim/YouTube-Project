class Api::LikesController < ApplicationController

    def create
        current_user.id = params[:like][:user_id]
        @like = Like.new(like_params)
        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end
    
    def destroy 
        @like = current_user.likes.find(params[:id])
        @like.destroy
    end

    private

    def like_params
        params.require(:like).permit(:like_value, :user_id, :likable_id, :likable_type)
    end

end