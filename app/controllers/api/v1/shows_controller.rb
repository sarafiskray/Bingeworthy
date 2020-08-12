module Api
	module V1
		class ShowsController < ApplicationController

			protect_from_forgery with: :null_session


			def index
				shows = Show.all
				render json: ShowSerializer.new(shows, options).serialized_json
			end

			def show
				show = Show.find_by(slug: params[:slug])
				render json: ShowSerializer.new(show, options).serialized_json
			end

			def create
				show = Show.new(show_params)

				if show.save
					render json: ShowSerializer.new(show).serialized_json
				else
					render json: {error: show.errors.messages}, status: 422
				end
			end

			def update
				show = Show.find_by(slug: params[:slug])

				if show.update(show_params)
					render json: ShowSerializer.new(show, options).serialized_json
				else
					render json: {error: show.errors.messages}, status: 422
				end
			end
			

			def destroy
				show = Show.find_by(slug: params[:slug])

				if show.destroy
					head :no_content
				else
					render json: {error: show.errors.messages}, status: 422
				end
			end

			private

			def show_params
				params.require(:show).permit(:title, :image_url, :genre, :year)
			end

			def options
				@options ||= { include: %i[reviews] }
			end

		end
	end
end