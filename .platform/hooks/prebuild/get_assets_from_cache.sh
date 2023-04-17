#!/bin/bash
set -xe

EB_APP_STAGING_DIR=/var/app/staging

mkdir -p /tmp/cache

if aws s3 ls s3://"${AWS_BUCKET_NAME}"/cache/gem.tar.gz; then
  aws s3 cp --quiet s3://"${AWS_BUCKET_NAME}"/cache/gem.tar.gz /tmp/cache/gem.tar.gz
fi

if aws s3 ls s3://"${AWS_BUCKET_NAME}"/cache/node_modules.tar.gz; then
  aws s3 cp --quiet s3://"${AWS_BUCKET_NAME}"/cache/node_modules.tar.gz /tmp/cache/node_modules.tar.gz
fi

if aws s3 ls s3://"${AWS_BUCKET_NAME}"/cache/assets.tar.gz; then
  aws s3 cp --quiet s3://"${AWS_BUCKET_NAME}"/cache/assets.tar.gz /tmp/cache/assets.tar.gz
fi

[ -f /tmp/cache/gem.tar.gz ] && \
  tar -xf /tmp/cache/gem.tar.gz -C $EB_APP_STAGING_DIR && \
  chown webapp:webapp -R "$EB_APP_STAGING_DIR/vendor/bundle"

[ -f /tmp/cache/node_modules.tar.gz ] && \
  tar -xf /tmp/cache/node_modules.tar.gz -C $EB_APP_STAGING_DIR && \
  chown webapp:webapp -R "$EB_APP_STAGING_DIR/node_modules"

[ -f /tmp/cache/assets.tar.gz ] && \
  tar -xf /tmp/cache/assets.tar.gz -C $EB_APP_STAGING_DIR && \
  chown webapp:webapp -R "$EB_APP_STAGING_DIR/tmp"

exit 0
