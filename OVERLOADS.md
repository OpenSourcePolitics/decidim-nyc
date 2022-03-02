# Overrides

## Fix geocoded map broken when latitude or longitude is NaN

* `app/controllers/decidim/proposals/proposals_controller.rb`

```ruby
# on line 44
@all_geocoded_proposals = @base_query.geocoded.where.not(latitude: Float::NAN, longitude: Float::NAN)
```

## Update admin settings and fix title bar
### Modified
- **app/views/layouts/decidim/admin/_title_bar.html.erb**
- **app/views/layouts/decidim/admin/settings.html.erb**

## Fix metrics issue in admin dashboard
 - **app/stylesheets/decidim/vizzs/_areachart.scss**
```scss
    .area{
        fill: rgba(140,198,63,0.36);;
    }
```

## Fix date display on meeting show view
When updating decidim date format from french to american format, date on meeting show view doesn't change
 - **app/cells/decidim/author/date.erb**
```html
    <%= l creation_date.to_date, format: :decidim_short %>
```
## Fix meetings orders in indexes
* `app/controllers/decidim/meetings/meetings_controller.rb`
* `app/controllers/decidim/meetings/directory/meetings_controller.rb`
##  Fix meetings registration serializer
* `app/serializers/decidim/meetings/registration_serializer.rb`
## Fix UserAnswersSerializer for CSV exports
* `lib/decidim/forms/user_answers_serializer.rb`
## 28c8d74 - Add basic tests to reference package (#1), 2021-07-26
* `lib/extends/commands/decidim/admin/create_participatory_space_private_user_extends.rb`
* `lib/extends/commands/decidim/admin/impersonate_user_extends.rb`
##  cd5c2cc - Backport fix/user answers serializer (#11), 2021-09-30
* `lib/decidim/forms/user_answers_serializer.rb`
* `app/cells/decidim/tos_page/sticky_form.erb`
459d4d9 - Sign In cleanup, 2020-10-08

* `app/extends/devise/OmniauthCallbacksControllerExtend.rb`
3a392d3 - fix OmniauthCallbacksController, 2020-10-08

* `app/commands/decidim/create_omniauth_registration.rb`
d4001d9 - fix newsletter opt in, 2021-02-22

* `app/controllers/decidim/devise/sessions_controller.rb`
7a005e1 - Merge branch 'develop', 2021-12-03

* `app/views/layouts/decidim/admin/_header.html.erb`
7a005e1 - Merge branch 'develop', 2021-12-03

* `app/views/layouts/decidim/_application.html.erb`
7a005e1 - Merge branch 'develop', 2021-12-03

* `app/views/layouts/decidim/_head.html.erb`
7a005e1 - Merge branch 'develop', 2021-12-03

* `app/views/layouts/decidim/_language_chooser.html.erb`
4d9fa42 - add request path to language chooser links, 2022-01-10

* `app/views/decidim/devise/shared/_omniauth_buttons.html.erb`
33a661e - Login tweaks, 2020-10-13

* `app/views/decidim/devise/sessions/new.html.erb`
33a661e - Login tweaks, 2020-10-13

* `app/views/decidim/shared/_login_modal.html.erb`
33a661e - Login tweaks, 2020-10-13

* `app/assets/images/favicon.ico`
3440eb6 - Add SAML SSO, 2020-10-08

* `app/assets/images/nyc-logo.png`
3440eb6 - Add SAML SSO, 2020-10-08

* `app/assets/images/nyc_white.png`
3440eb6 - Add SAML SSO, 2020-10-08

* `app/assets/images/nyc-for-developers-logo.svg`
3440eb6 - Add SAML SSO, 2020-10-08

* `app/assets/images/nyc-logo@2x.png`
3440eb6 - Add SAML SSO, 2020-10-08

* `app/assets/images/nyc-logo.svg`
3440eb6 - Add SAML SSO, 2020-10-08

* `app/assets/fonts/decidim/Ultramagnetic/Ultramagnetic.woff2`
ef75cf3 - Add Ultramagnetic font, 2020-10-15

* `app/assets/fonts/decidim/Ultramagnetic/Ultramagnetic.svg`
ef75cf3 - Add Ultramagnetic font, 2020-10-15

* `app/assets/fonts/decidim/Ultramagnetic/Ultramagnetic.eot`
ef75cf3 - Add Ultramagnetic font, 2020-10-15

* `app/assets/fonts/decidim/Ultramagnetic/Ultramagnetic.woff`
ef75cf3 - Add Ultramagnetic font, 2020-10-15

* `app/assets/fonts/decidim/Ultramagnetic/Ultramagnetic.ttf`
ef75cf3 - Add Ultramagnetic font, 2020-10-15

* `app/assets/stylesheets/decidim/vizzs/_areachart.scss`
ed2867b - Overload _areachart.scss file to fix metrics issue, 2021-06-24

* `app/assets/stylesheets/_fontface.scss`
ef75cf3 - Add Ultramagnetic font, 2020-10-15

* `app/helpers/decidim/backup_helper.rb`
7a005e1 - Merge branch 'develop', 2021-12-03

* `app/services/decidim/s3_retention_service.rb`
7a005e1 - Merge branch 'develop', 2021-12-03

* `config/environments/production.rb.old`


* `config/initializers/sidekiq.rb`
f510f63 - Remove order reminder from Sidekiq configuration and comment REDIS_URL, 2022-03-02

* `config/initializers/omniauth.rb`
7a005e1 - Merge branch 'develop', 2021-12-03

* `lib/omniauth/strategies/email_not_validated_error.rb`
7a005e1 - Merge branch 'develop', 2021-12-03

* `lib/omniauth/strategies/nyc.rb`
7a005e1 - Merge branch 'develop', 2021-12-03

