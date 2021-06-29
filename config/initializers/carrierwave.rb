# frozen_string_literal: true

if Rails.env.production? && Rails.application.secrets.dig(:aws_secret_access_key).present?
  # Setup CarrierWave to use Amazon S3. Add `gem "fog-aws" to your Gemfile.
  require 'carrierwave/storage/fog'

  CarrierWave.configure do |config|
    config.storage = :fog
    config.fog_provider = 'fog/aws' # required
    config.fog_credentials = {
      provider:              'AWS', # required
      aws_access_key_id:     Rails.application.secrets.aws_access_key_id, # required
      aws_secret_access_key: Rails.application.secrets.aws_secret_access_key, # required
      region:                Rails.application.secrets.aws_region,  # optional, defaults to 'us-east-1'
      host:                  Rails.application.secrets.aws_endpoint, # optional, defaults to nil
    }
    config.fog_directory  = Rails.application.secrets.aws_bucket_name # required
    config.fog_public     = true                                             # optional, defaults to true
    config.fog_attributes = { 'Cache-Control' => "max-age=#{365.day.to_i}" }    # optional, defaults to {}
    config.storage = :fog
    if Rails.application.secrets.dig(:asset_host).present?
      config.asset_host = "https://#{Rails.application.secrets.dig(:asset_host)}"
    end
  end

else
  # Default CarrierWave setup.
  CarrierWave.configure do |config|
    config.permissions = 0o666
    config.directory_permissions = 0o777
    config.storage = :file
    config.enable_processing = !Rails.env.test?
    if Rails.application.secrets.dig(:asset_host).present?
      config.asset_host = "https://#{Rails.application.secrets.dig(:asset_host)}"
    end
  end
end
