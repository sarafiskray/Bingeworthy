class ShowSerializer
  include FastJsonapi::ObjectSerializer
  
  attributes :title, :image_url, :genre, :year, :slug, :avg_score

  has_many :reviews
end
