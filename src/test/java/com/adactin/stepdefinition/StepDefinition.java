package com.adactin.stepdefinition;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.SendKeysAction;

import com.PageObjectManager.object.PageObjectMan;
import com.adactin.baseclass.BaseClass;
import com.adactin.pom.AdactinLogin;
import com.adactin.properties.ConfigurationHelper;
import com.adactin.properties.FileManager;
import com.adactin.runner.Runner;

import cucumber.api.java.en.*;

public class StepDefinition extends BaseClass {

	public static WebDriver driver = Runner.driver;

	public static PageObjectMan pom = new PageObjectMan(driver);

	@Given("^User launches browser$")
	public void user_launches_browser() throws Throwable {

		System.out.println("Launching browser:Background");
	}

	@Given("^Use logins into the application$")
	public void use_logins_into_the_application() throws Throwable {
		System.out.println("Logins into the application:Background");

	}

	@Given("^User launch the application$")
	public void user_launch_the_application() throws Throwable {

	}

	@When("^User enters valid username \"([^\"]*)\"$")
	public void user_enters_valid_username(String arg1) throws Throwable {
		sendingKey(pom.getLogin().getUsername(), arg1);

	}

	@When("^User enter valid password in password field \"([^\"]*)\"$")
	public void user_enter_valid_password_in_password_field(String arg1) throws Throwable {
		sendingKey(pom.getLogin().getPassword(), arg1);

	}

	@When("^User clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
	
		clicking(pom.getLogin().getLoginBtn());

	}

	@Then("^User confirms that page navigates to hotel selection page$")
	public void user_confirms_that_page_navigates_to_hotel_selection_page() throws Throwable {

	}

	@Given("^User logins into the application$")
	public void user_logins_into_the_application() throws Throwable {
	}

	@When("^User selects location \"([^\"]*)\"$")
	public void user_selects_location(String arg1) throws Throwable {
		
			dropDowns(pom.getSearchHotel().getLocation(), "byvalue", arg1);

		
	}

	@When("^User selects hotel \"([^\"]*)\"$")
	public void user_selects_hotel(String arg1) throws Throwable {
		dropDowns(pom.getSearchHotel().getHotel(), "byvalue", arg1);

	}

	@When("^User selects room type \"([^\"]*)\"$")
	public void user_selects_room_type(String arg1) throws Throwable {
		dropDowns(pom.getSearchHotel().getRoomsize(), "byvalue", arg1);

	}

	@When("^User selects number of rooms \"([^\"]*)\"$")
	public void user_selects_number_of_rooms(String arg1) throws Throwable {
		dropDowns(pom.getSearchHotel().getRoomNo(), "byvalue", arg1);

	}

	@When("^User selects number of adults \"([^\"]*)\"$")
	public void user_selects_number_of_adults(String arg1) throws Throwable {
		dropDowns(pom.getSearchHotel().getPersonAdult(), "byvalue", arg1);

	}

	@When("^User selects check in date as given in data file$")
	public void user_selects_check_in_date_as_given_in_data_file() throws Throwable {

	}

	@When("^User selects check out date as given in data file$")
	public void user_selects_check_out_date_as_given_in_data_file() throws Throwable {

	}

	@When("^User selects number of children as given in data file$")
	public void user_selects_number_of_children_as_given_in_data_file() throws Throwable {

	}

	@When("^User clicks on search button$")
	public void user_clicks_on_search_button() throws Throwable {
		clicking(pom.getSearchHotel().getSearch());

	}

	@Then("^User checks page navigated to hotel booking page$")
	public void user_checks_page_navigated_to_hotel_booking_page() throws Throwable {
	}

	@Given("^User fills all mandatory fields in search hotel page and clicks search$")
	public void user_fills_all_mandatory_fields_in_search_hotel_page_and_clicks_search() throws Throwable {

	}

	@When("^User selects the preferred hotel$")
	public void user_selects_the_preferred_hotel() throws Throwable {
		clicking(pom.getSelectHotel().getHotelSelect());
		clicking(pom.getSelectHotel().getContinueButton());

	}

	@Then("^User checks for confirmation message for hotel booking$")
	public void user_checks_for_confirmation_message_for_hotel_booking() throws Throwable {

	}

	@When("^User enters valid First name \"([^\"]*)\"$")
	public void user_enters_valid_First_name(String arg1) throws Throwable {
		sendingKey(pom.getPayment().getFirstn(), arg1);

	}

	@When("^User enters valid Last name \"([^\"]*)\"$")
	public void user_enters_valid_Last_name(String arg1) throws Throwable {
		sendingKey(pom.getPayment().getLastn(), arg1);

	}

	@When("^User enters valid billing address \"([^\"]*)\"$")
	public void user_enters_valid_billing_address(String arg1) throws Throwable {
		sendingKey(pom.getPayment().getBillingAdd(), arg1);

	}

	@When("^User enters valid credit card details \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_enters_valid_credit_card_details(String arg1, String arg2, String arg3, String arg4, String arg5)
			throws Throwable {
		sendingKey(pom.getPayment().getCreditcard(), arg1);
		dropDowns(pom.getPayment().getCardtype(), "byindex", arg2);
		sendingKey(pom.getPayment().getExpiryDate(), arg3);
		dropDowns(pom.getPayment().getExpiryYear(), "byvalue", arg4);
		sendingKey(pom.getPayment().getCvv(), arg5);

	}

	@When("^User clicks on Book now button$")
	public void user_clicks_on_Book_now_button() throws Throwable {
		clicking(pom.getPayment().getBookNow());

	}

	@Then("^User checks whether page navigated to itenary$")
	public void user_checks_whether_page_navigated_to_itenary() throws Throwable {
	}

}
