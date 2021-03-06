base_url = "http://#{request.host_with_port}"
xml.instruct! :xml, :version=>'1.0'
xml.tag! 'urlset', 'xmlns' => 'http://www.sitemaps.org/schemas/sitemap/0.9' do
  xml.url{
      xml.loc("http://contycontent.com")
      xml.changefreq("weekly")
      xml.priority(1.0)
  }
  xml.url{
      xml.loc("http://contycontent.com/portfolio")
      xml.changefreq("weekly")
      xml.priority(0.9)
  }
  xml.url{
      xml.loc("http://contycontent.com/contact_me")
      xml.changefreq("weekly")
      xml.priority(0.9)
  }
  xml.url{
      xml.loc("http://contycontent.com/about")
      xml.changefreq("weekly")
      xml.priority(0.9)
  }
  xml.url{
      xml.loc("http://contycontent.com/blog")
      xml.changefreq("weekly")
      xml.priority(0.9)
  }

  @categories.each do |p|
    xml.url {
      xml.loc("http://contycontent.com/categories/#{p.id.to_s}")
      xml.changefreq("weekly")
      xml.priority(0.5)
    }
  end
end
