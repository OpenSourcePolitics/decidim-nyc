# frozen_string_literal: true

Decidim::HalfSignup.configure do |config|
  # change this to false, if you don't want to redirect the user to the tos agreement page
  config.show_tos_page_after_signup = Rails.application.secrets.dig(:decidim, :module, :half_signup, :show_tos_page_after_signup)

  config.auth_code_length = 4
  # change this to other values if you want to change the length of generated code (be advised to remain in an acceptable limits for the sake of best performance)

  config.default_countries = [:us]
  # change ':us' to the country/countries you want to be shown at the top(the first option will be selected by default).
end
