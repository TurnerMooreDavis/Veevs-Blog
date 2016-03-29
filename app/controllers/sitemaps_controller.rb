class SitemapsController < ApplicationController
  def index
    @categories = Category.all #we are generating url's for posts
    respond_to do |format|
     format.xml
    end
  end
end
