class ClientController < ApplicationController
  def home
  end

  def about
  end

  def contact_me
    @message = Message.new
  end

  def portfolio
    @categories = Category.all
  end

  def blog
    redirect_to 'https://contycontent.wordpress.com/'
  end
end
