# frozen_string_literal: true

module Devise
  class OmniauthCallbacksControllerExtend
    def dummy
      0
    end
  end
end

Devise::OmniauthCallbacksController.class_eval do
  skip_before_action :verify_authenticity_token, if: :saml_callback?

  def saml_callback?
    request.path.end_with?("users/auth/nyc/callback")
  end
end
