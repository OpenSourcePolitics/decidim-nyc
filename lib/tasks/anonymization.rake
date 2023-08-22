# frozen_string_literal: true

namespace :anonymization do
  desc "Anonymize users public information"
  task users: :environment do
    logger = Logger.new($stdout)

    logger.info("Running anonymization of users data")

    Decidim::User.where(admin: false).find_each do |user|
      name = "#{Faker::Name.unique.name.tr(".","")}"
      user.update_columns(email: Faker::Internet.unique.email,
                          name: name,
                          nickname: name[0..18].split(" ").join("_").downcase)

      logger.info("[Updating] user ID (#{user.id}) with email '#{user.email}'...")
    rescue ActiveRecord::RecordInvalid, NameError
      user.update_columns(email: Faker::Internet.unique.email,
                          name: "#{Faker::Name.unique.name.tr(".","")}",
                          nickname: user.name[0..18].split(" ").join("_").downcase)

      logger.info("[Updating error] An error occured when updating user ID (#{user.id}), retrying with email '#{user.email}'...")
    end

    Decidim::User.where(admin: false).update_all(last_sign_in_ip: nil,
                                                 current_sign_in_ip: nil,
                                                 unconfirmed_email: nil,
                                                 avatar: nil,
                                                 personal_url: "",
                                                 extended_data: {})
    logger.info("Operation terminated")
  end
end
