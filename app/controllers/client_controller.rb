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
end
