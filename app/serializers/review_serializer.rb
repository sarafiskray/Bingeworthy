class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :headline, :description, :score, :show_id, :username
end
