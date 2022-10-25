# frozen_string_literal: true

require "decidim/dev"
Decidim::Dev.dummy_app_path = File.expand_path(Rails.root.to_s)
require "decidim/dev/test/base_spec_helper"

RSpec.configure do |config|
  config.before do
    # Initializers configs
    SocialShareButton.configure do |social_share_button|
      social_share_button.allow_sites = %w(twitter facebook whatsapp_app whatsapp_web telegram)
    end

    # Decidim.available_locales = [:en, :fr]

    # Mock sign_up secrets
    Rails.application.secrets[:sign_up_button][:url] = "https://localhost:8000/"
    Rails.application.secrets[:sign_up_button][:sp_name] = "localhost:8000"
    Rails.application.secrets[:sign_up_button][:target] = "https://localhost:8000/sign_in_redirect/nyc"
  end
end
