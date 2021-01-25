class Review < ApplicationRecord
  belongs_to :show
  belongs_to :user, foreign_key: 'username'
end
