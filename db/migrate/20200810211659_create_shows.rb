class CreateShows < ActiveRecord::Migration[6.0]
  def change
    create_table :shows do |t|
      t.string :title
      t.string :image_url
      t.string :genre
      t.integer :year
      t.string :slug

      t.timestamps
    end
  end
end
