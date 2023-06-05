# frozen_string_literal: true

module ProposalCreator
  # Produces a proposal from parsed data
  # OSP changes : Add organization as author
  # Returns a proposal
  def produce
    resource.add_coauthor(context[:current_organization], user_group: context[:user_group])

    resource
  end

  # Saves the proposal
  def finish!
    Decidim.traceability.perform_action!(:create, self.class.resource_klass, context[:current_user], visibility: "admin-only") do
      resource.save!
      resource
    end
    # No need to notify for official proposals import
    # notify(resource)
    # publish(resource)
  end
end

Decidim::Proposals::Import::ProposalCreator.class_eval do
  prepend(ProposalCreator)
end
