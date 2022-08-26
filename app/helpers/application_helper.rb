# frozen_string_literal: true

module ApplicationHelper
  def sign_up_url
    uri = URI(Rails.application.secrets.dig(:sign_up_button, :url))
    uri.query = {
      showNameFields: "false",
      lang: current_locale,
      spName: Rails.application.secrets.dig(:sign_up_button, :sp_name),
      target: Base64.urlsafe_encode64(Rails.application.secrets.dig(:sign_up_button, :target))
    }.to_query

    uri.to_s
  end
end
