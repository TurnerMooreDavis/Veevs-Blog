class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :name
      t.string :descriptions
      t.string :published_link
      t.integer :category_id

      t.timestamps null: false
    end
  end
end
