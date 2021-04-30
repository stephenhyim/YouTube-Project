class Api::SearchController < ApplicationController

def search
    @results = Video.where("title ILIKE :term", term: "%#{params[:searchBody]}%")
    render :index
end