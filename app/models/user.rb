class User < ApplicationRecord
    self.primary_key = "username"
    has_many :reviews

    before_create :slugify

	def slugify
		
	end
end
