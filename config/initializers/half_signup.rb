# frozen_string_literal: true

Decidim::HalfSignup.configure do |config|
  config.show_tos_page_after_signup = Rails.application.secrets.dig(:decidim, :module, :half_signup, :show_tos_page_after_signup)
end
