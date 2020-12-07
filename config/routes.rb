Rails.application.routes.draw do
  root 'tanks#index'

  resources :tanks
  resources :orders
  resources :supplies
  resources :suppliers
  resources :fuel_types
end
