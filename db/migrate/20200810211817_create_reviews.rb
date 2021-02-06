class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.string :headline
      t.string :description
      t.integer :score
      t.belongs_to :show, null: false, foreign_key: true

      t.string :username

      t.timestamps
    end
    add_index :reviews, :username
    add_index :reviews, [:show_id, :username], unique: true
  end
end
