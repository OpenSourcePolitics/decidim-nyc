#!/bin/bash
set -xe

cd /var/app/current

mkdir -p /tmp/cache

tar -zcf /tmp/cache/gem.tar.gz vendor/bundle
tar -zcf /tmp/cache/node_modules.tar.gz node_modules
tar -zcf /tmp/cache/assets.tar.gz tmp/cache/assets

aws s3 cp /tmp/cache/gem.tar.gz s3://"${AWS_BUCKET_NAME}"/cache/gem.tar.gz
aws s3 cp /tmp/cache/node_modules.tar.gz s3://"${AWS_BUCKET_NAME}"/cache/node_modules.tar.gz
aws s3 cp /tmp/cache/assets.tar.gz s3://"${AWS_BUCKET_NAME}"/cache/assets.tar.gz
