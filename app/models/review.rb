class Review < ApplicationRecord
  belongs_to :show
  belongs_to :user, foreign_key: :username
  #this vaidation probably isnt necessary 
  #as the database constraint already exists
  #validates :username, uniqueness: {scope: :show_id}
end
