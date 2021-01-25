class User < ApplicationRecord
    has_many :reviews

    before_create :slugify

	def slugify
		
	end
end
