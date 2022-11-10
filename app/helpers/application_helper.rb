# frozen_string_literal: true

module ApplicationHelper
  # Public: normalize entire providers names to they can be used for buttons
  # and icons.
  def normalize_full_provider_name(provider)
    provider.to_s
  end

  # Public: renders SSO link as image
  def sso_provider_image(provider, link_to_path, image_path = "media/images/FCboutons-10@2x.png")
    ActionController::Base.helpers.link_to link_to_path, class: "button--#{normalize_full_provider_name(provider)}", method: :post do
      image_pack_tag image_path,
                     alt: I18n.t("devise.shared.links.sign_in_with_provider",
                                 provider: normalize_full_provider_name(provider).titleize)
    end
  end

  # Public: renders SSO link as HTML button
  def sso_provider_button(provider, link_to_path)
    ActionController::Base.helpers.link_to link_to_path, class: "button button--social button--#{normalize_provider_name(provider)}", method: :post do
      html_element = content_tag(:span, oauth_icon(provider), class: "button--social__icon")
      html_element += content_tag(:span,
                                  t("sign_in_with_provider", provider: normalize_provider_name(provider).titleize,
                                                             scope: "devise.shared.links"), class: "button--social__text")

      html_element
    end
  end

  def sign_up_url
    return if Rails.application.secrets.dig(:sign_up_button, :url).blank?

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
