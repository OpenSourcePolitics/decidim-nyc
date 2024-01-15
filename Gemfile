# frozen_string_literal: true

source "https://rubygems.org"

DECIDIM_VERSION = "0.26"
DECIDIM_BRANCH = "release/#{DECIDIM_VERSION}-stable"

ruby RUBY_VERSION

gem "decidim", "~> #{DECIDIM_VERSION}.0"
gem "decidim-conferences", "~> #{DECIDIM_VERSION}.0"

# gem "acts_as_textcaptcha", "~> 4.5.1"
gem "decidim-budgets_paper_ballots", git: "https://github.com/digidemlab/decidim-module-budgets_paper_ballots", branch: DECIDIM_BRANCH
gem "decidim-decidim_awesome"
gem "decidim-half_signup", git: "https://github.com/OpenSourcePolitics/decidim-module-half_sign_up", branch: DECIDIM_BRANCH
gem "decidim-homepage_interactive_map", git: "https://github.com/OpenSourcePolitics/decidim-module-homepage_interactive_map.git", branch: DECIDIM_BRANCH
gem "decidim-homepage_proposals", git: "https://github.com/alecslupu-pfa/decidim-module_homepage_proposals", branch: "feature/reset-filters"
gem "decidim-phone_authorization_handler", git: "https://github.com/OpenSourcePolitics/decidim-module_phone_authorization_handler", branch: DECIDIM_BRANCH
gem "decidim-slider", git: "https://github.com/alecslupu-pfa/decidim-module-slider", branch: "main"
gem "decidim-spam_detection"
gem "decidim-term_customizer", git: "https://github.com/opensourcepolitics/decidim-module-term_customizer.git", branch: "fix/multi-threading-compliant-0.26"

# NOTE: Custom proposal states must be before simple_proposal
gem "decidim-custom_proposal_states", git: "https://github.com/alecslupu-pfa/decidim-module-custom_proposal_states", branch: "chore/fix-module-dependency"
gem "decidim-simple_proposal", git: "https://github.com/mainio/decidim-module-simple_proposal", branch: DECIDIM_BRANCH

gem "dotenv-rails"

gem "bootsnap", "~> 1.4"
gem "foundation_rails_helper", git: "https://github.com/sgruhier/foundation_rails_helper.git"

gem "puma", ">= 5.5.1"
gem "repost"
gem "uglifier", "~> 4.1"

gem "faker", "~> 2.14"

gem "nokogiri", "1.13.4"

gem "activejob-uniqueness", require: "active_job/uniqueness/sidekiq_patch"
gem "aws-sdk-s3", require: false
gem "fog-aws"
gem "sys-filesystem"

gem "omniauth-rails_csrf_protection"
gem "omniauth-saml"

# PTP_MODULE_VERSION = { github: "Pipeline-to-Power/decidim-module-ptp", branch: "feature/0.26/zip-code-voting" }
gem "decidim-budgets_booth", github: "OpenSourcePolitics/decidim-module-ptp", branch: "fix/button_focus_css-0.26"
gem "decidim-smsauth", github: "Pipeline-to-Power/decidim-module-ptp", branch: "feature/0.26/zip-code-voting"
gem "decidim-sms-twilio", github: "Pipeline-to-Power/decidim-module-ptp", branch: "feature/0.26/zip-code-voting"

group :development, :test do
  gem "brakeman", "~> 5.1"
  gem "byebug", "~> 11.0", platform: :mri
  gem "decidim-dev", "~> #{DECIDIM_VERSION}.0"
end

group :development do
  gem "letter_opener_web", "~> 1.3"
  gem "listen", "~> 3.1"
  gem "rubocop-faker"
  gem "spring", "~> 2.0"
  gem "spring-watcher-listen", "~> 2.0"
  gem "web-console", "4.0.4"
end

group :production do
  gem "dalli"
  gem "hiredis"
  gem "lograge"
  gem "passenger"
  gem "redis"
  gem "rubocop"
  gem "sentry-rails"
  gem "sentry-ruby"
  gem "sentry-sidekiq"
  gem "sidekiq", "~> 6.0"
  gem "sidekiq-scheduler", "~> 5.0"
end
