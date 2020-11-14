Rails.application.routes.draw do
  root 'fuels#index'

  resources :fuels
end
