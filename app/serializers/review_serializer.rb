class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :headline, :description, :score, :show_id, :user_id
end
