Rails.application.routes.draw do

  resources :posts, only: :show

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    
  end




  root 'static_pages#root'
end
