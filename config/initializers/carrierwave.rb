# frozen_string_literal: true

# Default CarrierWave setup.
CarrierWave.configure do |config|
  config.permissions = 0o666
  config.directory_permissions = 0o777
  config.storage = :file
  config.enable_processing = !Rails.env.test?
  # This needs to be set for correct attachment file URLs in emails
  # DON'T FORGET to ALSO set this in `config/application.rb`
  # config.asset_host = "https://your.server.url"
end

if Rails.env.production? && Rails.application.secrets[:aws_secret_access_key].present?
  # Setup CarrierWave to use Amazon S3. Add `gem "fog-aws" to your Gemfile.
  require "carrierwave/storage/fog"

  CarrierWave.configure do |config|
    config.storage = :fog
    config.fog_provider = "fog/aws"
    config.fog_credentials = {
      provider: "AWS",
      aws_access_key_id: Rails.application.secrets[:aws_access_key_id],
      aws_secret_access_key: Rails.application.secrets[:aws_secret_access_key],
      region: Rails.application.secrets[:aws_region],
      host: Rails.application.secrets[:aws_host]
      # endpoint:              'https://s3.example.com:8080'
    }
    config.fog_directory = Rails.application.secrets[:aws_bucket_name]
    config.fog_attributes = {
      "Cache-Control" => "max-age=#{365.days.to_i}",
      "X-Content-Type-Options" => "nosniff"
    }
  end
end
