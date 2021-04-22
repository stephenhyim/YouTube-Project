class Api::CommentsController < ApplicationController

    def index
        @comments = Comment.where(video_id: params[:video_id])
        # debugger

        render :index
    end

    def show
        @comment = Comment.find(params[:id])
        render :show
    end

    def create 
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id
        # debugger
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    private

    def comment_params
        
        params.require(:comment).permit(:body, :user_id, :video_id)
    end

end