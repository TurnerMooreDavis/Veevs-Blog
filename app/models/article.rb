class Article < ActiveRecord::Base
  belongs_to :category
  has_attached_file :attachment
  validates_attachment_content_type :attachment, :content_type => //
end
