json.array!(@articles) do |article|
  json.extract! article, :id, :name, :descriptions, :published_link, :category_id
  json.url article_url(article, format: :json)
end
