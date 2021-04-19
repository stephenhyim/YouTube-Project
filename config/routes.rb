Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :videos, only: [:index, :show, :create, :update, :destroy]
    resources :posts, only: [:create, :index]
    resources :comments, only: [:index, :show, :create, :update, :destroy]
    resources :likes, only: [:create, :destroy]
  end

  root 'static_pages#root'

end
