# frozen_string_literal: true

require_relative "boot"

require "decidim/rails"
# Add the frameworks used by your app that are not loaded by Decidim.
require "action_cable/engine"
# require "action_mailbox/engine"
# require "action_text/engine"

# TODO : add missing dep to decidim-initiatives/lib/decidim/initiatives/engine.rb
# require "wicked_pdf"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module DevelopmentApp
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0
    config.time_zone = "Europe/Paris"
    config.i18n.load_path += Dir[Rails.root.join("config/locales/**/*.yml").to_s]

    # This needs to be set for correct images URLs in emails
    # DON'T FORGET to ALSO set this in `config/initializers/carrierwave.rb`
    config.action_mailer.asset_host = "https://#{Rails.application.secrets[:asset_host]}/" if Rails.application.secrets[:asset_host].present?

    config.backup = config_for(:backup).deep_symbolize_keys

    config.action_dispatch.default_headers = {
      "X-Frame-Options" => "SAMEORIGIN",
      "X-XSS-Protection" => "1; mode=block",
      "X-Content-Type-Options" => "nosniff"
    }

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    initializer "session cookie domain", after: "Expire sessions" do
      Rails.application.config.session_store :cookie_store, expire_after: Decidim.config.expire_session_after, domain: :all, tld_length: 3
    end

    config.after_initialize do
      require "extends/controllers/decidim/devise/sessions_controller_extends"

      Decidim.content_blocks.register(:homepage, :html2) do |content_block|
        content_block.cell = "decidim/content_blocks/html"
        content_block.public_name_key = "decidim.content_blocks.html.name_2"
        content_block.settings_form_cell = "decidim/content_blocks/html_settings_form"

        content_block.settings do |settings|
          settings.attribute :html_content, type: :text, translated: true
        end
      end
    end
  end
end
