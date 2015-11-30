json.array!(@samples) do |sample|
  json.extract! sample, :id, :category_id, :primery_keyword, :second_keyword, :third_keyword, :host_url, :company_website, :reference_urls, :notes, :email, :price, :word_count, :topic
  json.url sample_url(sample, format: :json)
end
