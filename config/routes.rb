Rails.application.routes.draw do
  get 'sessions/new'
  get 'users/new'
  get 'users/index'
  get 'static_pages/home'
  get 'static_pages/help'
  get 'static_pages/about'
  get  'static_pages/contact'
  get 'signup'  => 'users#new'
  get    'login'   => 'sessions#new'
  post   'login'   => 'sessions#create'
  delete 'logout'  => 'sessions#destroy'
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
