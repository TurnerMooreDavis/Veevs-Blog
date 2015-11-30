class AddFieldsToSample < ActiveRecord::Migration
  def change
    add_column :samples, :title_tag, :boolean
    add_column :samples, :meta_description, :boolean
  end
end
