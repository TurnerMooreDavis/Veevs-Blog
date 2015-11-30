require 'test_helper'

class SamplesControllerTest < ActionController::TestCase
  setup do
    @sample = samples(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:samples)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create sample" do
    assert_difference('Sample.count') do
      post :create, sample: { category_id: @sample.category_id, company_website: @sample.company_website, email: @sample.email, host_url: @sample.host_url, notes: @sample.notes, price: @sample.price, primery_keyword: @sample.primery_keyword, reference_urls: @sample.reference_urls, second_keyword: @sample.second_keyword, third_keyword: @sample.third_keyword, topic: @sample.topic, word_count: @sample.word_count }
    end

    assert_redirected_to sample_path(assigns(:sample))
  end

  test "should show sample" do
    get :show, id: @sample
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @sample
    assert_response :success
  end

  test "should update sample" do
    patch :update, id: @sample, sample: { category_id: @sample.category_id, company_website: @sample.company_website, email: @sample.email, host_url: @sample.host_url, notes: @sample.notes, price: @sample.price, primery_keyword: @sample.primery_keyword, reference_urls: @sample.reference_urls, second_keyword: @sample.second_keyword, third_keyword: @sample.third_keyword, topic: @sample.topic, word_count: @sample.word_count }
    assert_redirected_to sample_path(assigns(:sample))
  end

  test "should destroy sample" do
    assert_difference('Sample.count', -1) do
      delete :destroy, id: @sample
    end

    assert_redirected_to samples_path
  end
end
