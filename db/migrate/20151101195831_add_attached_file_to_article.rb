class AddAttachedFileToArticle < ActiveRecord::Migration
  def change
    add_attachment :articles, :attachment
  end
end
