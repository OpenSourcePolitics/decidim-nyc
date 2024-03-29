# frozen_string_literal: true

require "decidim/dev"
Decidim::Dev.dummy_app_path = File.expand_path(Rails.root.to_s)
require "decidim/dev/test/base_spec_helper"

DEFAULT_LOCALE = :en
AVAILABLE_LOCALES = [:en, :ca, :es].freeze

RSpec.configure do |config|
  config.before do
    config.formatter = ENV.fetch("RSPEC_FORMATTER", "progress").to_sym
    # I18n configuration
    I18n.available_locales = AVAILABLE_LOCALES
    I18n.default_locale = DEFAULT_LOCALE
    I18n.locale = DEFAULT_LOCALE

    # Decidim configurations
    Decidim.available_locales = AVAILABLE_LOCALES
    Decidim.default_locale = DEFAULT_LOCALE

    # Initializers configs
    Decidim.enable_html_header_snippets = false
    SocialShareButton.configure do |social_share_button|
      social_share_button.allow_sites = %w(twitter facebook whatsapp_app whatsapp_web telegram)
    end

    # Mock sign_up secrets
    Rails.application.secrets[:sign_up_button][:url] = "https://localhost:8000/"
    Rails.application.secrets[:sign_up_button][:sp_name] = "localhost:8000"
    Rails.application.secrets[:sign_up_button][:target] = "https://localhost:8000/sign_in_redirect/nyc"
  end
end
