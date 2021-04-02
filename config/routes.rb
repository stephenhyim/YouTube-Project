Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do 
      resources :videos, only: [:create, :update, :destroy]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :videos, only: [:index, :show]
    resources :posts, only: [:create, :index]

  end

  root 'static_pages#root'

end
