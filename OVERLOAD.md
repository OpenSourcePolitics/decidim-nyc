# List of overloaded files for specific needs in this repository

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
