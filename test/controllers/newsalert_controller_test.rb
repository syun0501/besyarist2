require 'test_helper'

class NewsalertControllerTest < ActionDispatch::IntegrationTest
  test "should get alert" do
    get newsalert_alert_url
    assert_response :success
  end

end
