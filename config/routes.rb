Rails.application.routes.draw do

  resources :videos, only: [:show]

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :videos, only: [:create, :index, :show]
    resources :posts, only: [:create, :index]


  end




  root 'static_pages#root'
end
