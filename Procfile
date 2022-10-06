web: bundle exec puma -C /opt/elasticbeanstalk/config/private/pumaconf.rb
worker: bundle exec sidekiq -e ${RACK_ENV:-development} -C config/sidekiq.yml