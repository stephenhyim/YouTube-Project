class Api::SearchController < ApplicationController

    def search

        # debugger
        @results = Video.where("title ILIKE :term", term: "%#{params[:searchBody]}%")
        render :index

    end

end