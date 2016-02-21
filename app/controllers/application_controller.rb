class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def authenticate_admin
    unless session[:conty_user_id]
      redirect_to login_path notice: "please log in to access this page"
    end
  end

end
