Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :videos, only: [:index, :show, :create, :update, :destroy]
    resources :posts, only: [:create, :index]

  end

  root 'static_pages#root'

end
