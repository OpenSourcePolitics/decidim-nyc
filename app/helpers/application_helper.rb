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

  # Public: test if the translation mode (:google or :smartling) requested is active
  def translation_mode?(mode)
    current_config = Rails.application.secrets.dig(:decidim, :translation_mode).to_sym
    if current_config == :both
      is_switch_active = Rails.application.secrets.dig(:decidim, :translation_switch_regexp).present? &&
                         request.path =~ Regexp.new(Rails.application.secrets.dig(:decidim, :translation_switch_regexp))
      # when :both mode are active and the regexp is matched by the current routes then we go :smartling
      mode.to_sym == (is_switch_active ? :smartling : :google)
    else
      mode.to_sym == current_config
    end
  end

  # Public: detect a target language for automatic translation
  def auto_target_language
    if Rails.application.secrets.dig(:decidim, :translation_mode).to_sym == :both && response.headers["content-language"].present?
      response.headers["content-language"].split("-").first
    end

    if translation_mode?(:google)
      default_trad = Rails.configuration.i18n.default_locale.to_s
      cookies[:googtrans] ||= { value: "/auto/#{default_trad}", expires: 1.year.from_now }
    end
  end
end
