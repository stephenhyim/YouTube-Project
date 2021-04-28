class API::DislikesController < ApplicationController

    def create
        @dislike = Dislike.new(dislike_params)
        if @dislike.save
            if @dislike.dislikable_type == "Video"
                @video = find_video(@dislike)
                render "/api/videos/show"
            else 
                @comment = find_comment(@dislike)
                render "/api/comments/show"
            end
        else
            render json: @dislike.errors.full_messages, status: 422
        end
    end

    def destroy
        @dislike = Dislike.find_by(dislike_params)
        @dislike.destroy
        if @dislike.dislikable_type == "Video"
            @video = find_video(@dislike)
            render "/api/videos/show"
        else
            @comment = find_comment(@dislike)
            render "/api/comments/show"
        end
    end


    private

    def dislike_params
        params.require(:dislike).permit(:disliker_id, :dislikable_id, :dislikable_type)
    end

    def find_video(dislike)
        return Video.find_by(id: dislike.dislikable_id)
    end

    def find_comment(dislike)
        return Comment.find_by(id: dislike.dislikable_id)
    end


end