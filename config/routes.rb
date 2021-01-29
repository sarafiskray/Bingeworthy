Rails.application.routes.draw do
	root "pages#index"

	namespace :api do
		namespace :v1 do
			resources :shows, param: :slug
			resources :reviews, only: [:create, :destroy]
			resources :users, param: :username
		end
	end

	get "*path", to: "pages#index", via: :all
end
