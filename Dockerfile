# Use ruby image to build our own image
FROM ruby:2.7

# We specify everythink will happen within the /app folder in the container
WORKDIR /app

# We copy these files from our current application to the /app container
COPY Gemfile Gemfile.lock ./

RUN apt-get update -yq \
    && apt-get -yq install curl gnupg ca-certificates \
    && curl -L https://deb.nodesource.com/setup_12.x | bash \
    && apt-get update -yq \
    && apt-get install -yq \
        dh-autoreconf=19 \
        ruby=1:2.5.* \
        ruby-dev=1:2.5.* \
        nodejs

# We install all the dependencies
RUN bundle install

# We copy all the files from our current application to the /app container
COPY . .

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]
