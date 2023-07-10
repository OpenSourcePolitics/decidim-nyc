shared_context "with scopes" do
  let(:parent_scope) { create(:scope, organization: organization) }
  let!(:subscopes) { create_list(:scope, 3, parent: parent_scope, organization: organization) }
  let!(:first_postals) do
    [].tap do |postals|
      5.times do |i|
        code = (10_000 + i).to_s
        postals << create(:scope, name: { en: code }, code: "FIRST_#{code}", parent: subscopes[0], organization: organization)
      end
    end
  end
  let!(:second_postals) do
    [].tap do |postals|
      7.times do |i|
        code = (10_010 + i).to_s
        postals << create(:scope, name: { en: code }, code: "SECOND_#{code}", parent: subscopes[1], organization: organization)
      end
    end
  end
  let!(:third_postals) do
    [].tap do |postals|
      8.times do |i|
        code = (10_020 + i).to_s
        postals << create(:scope, name: { en: code }, code: "THIRD_#{code}", parent: subscopes[2], organization: organization)
      end
    end
  end
end


shared_context "with scoped budgets" do
  include_context "with scopes"

  let(:organization) { create(:organization) }
  let(:component) { create(:budgets_component, settings: component_settings, organization: organization) }
  let(:component_settings) { { scopes_enabled: true, scope_id: parent_scope.id } }

  let(:budgets) { create_list(:budget, 3, component: component, total_budget: 100_000) }
  let!(:first_projects_set) { create_list(:project, projects_count, budget: budgets[0], budget_amount: 25_000) }
  let!(:second_projects_set) { create_list(:project, projects_count, budget: budgets[1], budget_amount: 25_000) }
  let!(:last_projects_set) { create_list(:project, projects_count, budget: budgets[2], budget_amount: 25_000) }

  before do
    # We update the description to be less than the truncation limit. To test the truncation, we update those in tests.
    attach_images(budgets)
    budgets[0].update!(scope: parent_scope, description: { en: "<p>Eius officiis expedita. 55</p>" })
    budgets[1].update!(scope: subscopes[0], description: { en: "<p>Eius officiis expedita. 56</p>" })
    budgets[2].update!(scope: subscopes[1])
  end

  private

  def attach_images(budgets)
    city_files = ["city.jpeg", "city2.jpeg", "city3.jpeg"]
    budgets.each_with_index do |budget, ind|
      budget.update(main_image: ActiveStorage::Blob.create_and_upload!(
        io: File.open(Decidim::Dev.asset(city_files[ind])),
        filename: city_files[ind],
        content_type: "image/jpeg"
      ))
    end
  end
end

shared_examples "ensure user sign in" do
  it "redirects user to the login page" do
    expect(page).to have_current_path(decidim.new_user_session_path)
    within_flash_messages do
      expect(page).to have_content "You need to login first."
    end
  end
end

shared_examples "ensure user data" do
  it "redirects the user" do
    expect(page).to have_current_path("/")
    within_flash_messages do
      expect(page).to have_content "You are not authorized to perform this action"
    end
  end
end


shared_examples "not allowable voting" do
  it "redirects the user" do
    expect(page).to have_current_path("/")
    within_flash_messages do
      expect(page).to have_content "You are not authorized to perform this action"
    end
  end
end

shared_examples "cancel voting" do
  before do
    visit current_path
  end

  it "redirects the user to root" do
    click_button "Cancel voting"
    within ".reveal" do
      expect(page).to have_content "Are you sure you don't want to cast your vote?"
      expect(page).to have_css("button.button.expanded", text: "Continue voting")
      expect(page).to have_css("a.button.hollow.expanded", text: "I don't want to vote right now")
      click_button "Continue voting"
    end
    click_button "Cancel voting"
    within ".reveal" do
      click_link "I don't want to vote right now"
    end
    expect(page).to have_current_path("/")
  end

  context "when vote_cancel_url is set to a specific location" do
    before do
      component.update!(settings: component_settings.merge(workflow: "zip_code", vote_cancel_url: decidim_budgets.budgets_path))
      visit current_path
    end

    it "redirects to the correct location" do
      click_button "Cancel voting"
      within ".reveal" do
        expect(page).to have_content "Are you sure you don't want to cast your vote?"
        expect(page).to have_css("button.button.expanded", text: "Continue voting")
        expect(page).to have_css("a.button.hollow.expanded", text: "I don't want to vote right now")
        click_button "Continue voting"
      end
      click_button "Cancel voting"
      within ".reveal" do
        click_link "I don't want to vote right now"
      end
      expect(page).to have_current_path(decidim_budgets.budgets_path)
    end
  end
end

shared_examples "ordering projects by selected option" do |selected_option|
  before do
    visit current_path
    within ".order-by" do
      expect(page).to have_selector("ul[data-dropdown-menu$=dropdown-menu]", text: "Random order")
      page.find("a", text: "Random order").click
      click_link(selected_option)
    end
  end

  it "lists the projects ordered by selected option" do
    within "#projects li.is-dropdown-submenu-parent a" do
      expect(page).to have_no_content("Random order", wait: 20)
      expect(page).to have_content(selected_option)
    end

    expect(page).to have_selector("#projects .budget-list .budget-list__item:first-child", text: translated(first_project.title))
  end
end