class User < ApplicationRecord
    self.primary_key = "username"

    has_many :reviews, foreign_key: :username

    before_create :slugify

	def slugify
		
	end
end
