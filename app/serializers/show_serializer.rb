class ShowSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :image_url, :genre, :year, :slug

  has_many :reviews
end
