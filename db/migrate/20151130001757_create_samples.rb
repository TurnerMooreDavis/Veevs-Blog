class CreateSamples < ActiveRecord::Migration
  def change
    create_table :samples do |t|
      t.integer :category_id
      t.string :primery_keyword
      t.string :second_keyword
      t.string :third_keyword
      t.string :host_url
      t.string :company_website
      t.string :reference_urls
      t.text :notes
      t.string :email
      t.decimal :price
      t.string :word_count
      t.string :topic

      t.timestamps null: false
    end
  end
end
