class Api::VideosController < ApplicationController

    def index
        @videos = Video.all
        # @users = @videos.includes(:user).to_a  #N+1 QUERIESSSSSS!!!!
        render :index
    end

    def show
        # @videos = Video.all
        @video = Video.find(params[:id])
        render :show
    end

    def create 
        @video = Video.new(video_params)
        debugger
        if @video.save
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    private

    def video_params
        params.require(:video).permit(:title, :description, :video, :user_id)
    end

end