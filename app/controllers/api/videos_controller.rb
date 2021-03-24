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

    private

    def post_params
        params.require(:video).permit(:title)
    end

end