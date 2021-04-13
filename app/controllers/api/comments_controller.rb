class Api::commentsController < ApplicationController

    def index
        debugger
        @comments = Comment.where(video_id: params[:videoId])

        render :index
    end

    def show
        @comment = Comment.find(params[:id])
        render :show
    end

    def create 
        @comment = Comment.new(comment_params)

        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def comment_params
        params.require(:comment).permit(:body)
    end

end