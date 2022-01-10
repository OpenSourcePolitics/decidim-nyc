# frozen_string_literal: true

require_relative "boot"

require "rails/all"

# TODO : add missing dep to decidim-initiatives/lib/decidim/initiatives/engine.rb
# require "wicked_pdf"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module DevelopmentApp
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2
    config.time_zone = "Europe/Paris"
    config.i18n.load_path += Dir[Rails.root.join("config/locales/**/*.yml").to_s]

    # This needs to be set for correct images URLs in emails
    # DON'T FORGET to ALSO set this in `config/initializers/carrierwave.rb`
    config.action_mailer.asset_host = "https://#{Rails.application.secrets[:asset_host]}" if Rails.application.secrets[:asset_host].present?

    config.backup = config_for(:backup).deep_symbolize_keys

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    initializer "session cookie domain", after: "Expire sessions" do
      Rails.application.config.session_store :cookie_store, expire_after: Decidim.config.expire_session_after, domain: :all, tld_length: 3
    end
  end
end
