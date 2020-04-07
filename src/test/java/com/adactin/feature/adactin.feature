@login
Feature: Testing Hotel booking functionality on adactin application 

Background:
Given User launches browser
And Use logins into the application


Scenario Outline: User checking login function using valid username and password
Given User launch the application
When User enters valid username "<username>" 
And User enter valid password in password field "<password>"
And User clicks on login button
Then User confirms that page navigates to hotel selection page

Examples:
|username|password|
|aaa|bbbb|
|pasupathy|password|


Scenario: User checking hotel selection functionality
Given User logins into the application
When User selects location "London"
And User selects hotel "Hotel Creek"
And User selects room type "Double"
And User selects number of rooms "1 - One" 
And User selects check in date as given in data file
And User selects check out date as given in data file
And User selects number of adults "2 - Two"
And User selects number of children as given in data file
And User clicks on search button
Then User checks page navigated to hotel booking page


Scenario: User checking hotel availabilty function
Given User logins into the application
When User selects the preferred hotel
Then User checks for confirmation message for hotel booking


Scenario: User checks hotel booking functions
Given User logins into the application
When User enters valid First name "Pasupac"
And User enters valid Last name "pc"
And User enters valid billing address "no1 street"
And User enters valid credit card details "1234567891234567" "1" "january" "2022" "222"	
And User clicks on Book now button
Then User checks whether page navigated to itenary

Scenario: User logins facebook home page
Given User opens facebook website
When User enters valid username and password
Then User checks whether user logged in 


