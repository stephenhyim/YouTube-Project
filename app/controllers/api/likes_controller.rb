class Api::LikesController < ApplicationController

    def create
        @like = Like.new(like_params)
        if @like.save
            if @like.likable_type == "Video"
                @video = find_video(@like)
                render "/api/videos/show"
            else
               @comment = find_comment(@like) 
               render "/api/comments/show"
            end
        else
            render json: @like.errors.full_messages, status: 422
        end
    end
    
    def destroy 
        @like = likes.find_by(like_params)
        @like.destroy
        if @like.likable_type == "Video"
            @video = find_video(@like)
            render "/api/videos/show"
        else
           @comment = find_comment(@like) 
           render "/api/comments/show"
        end
    end

    private

    def like_params
        params.require(:like).permit(:user_id, :likable_id, :likable_type)
    end

    def find_video(like)
        return Video.find_by(id: like.likable_id)
    end

    def find_comment(like)
        return Comment.find_by(id: like.likable_id)
    end

end