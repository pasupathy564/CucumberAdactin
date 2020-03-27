$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/pasupac/eclipse-workspace/CucumberAdactin/src/test/java/com/adactin/feature/adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Testing Hotel booking functionality on adactin application",
  "description": "",
  "id": "testing-hotel-booking-functionality-on-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "User checking login function using valid username and password",
  "description": "",
  "id": "testing-hotel-booking-functionality-on-adactin-application;user-checking-login-function-using-valid-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User enters valid username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enter valid password in password field \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User confirms that page navigates to hotel selection page",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "testing-hotel-booking-functionality-on-adactin-application;user-checking-login-function-using-valid-username-and-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 16,
      "id": "testing-hotel-booking-functionality-on-adactin-application;user-checking-login-function-using-valid-username-and-password;;1"
    },
    {
      "cells": [
        "aaa",
        "bbbb"
      ],
      "line": 17,
      "id": "testing-hotel-booking-functionality-on-adactin-application;user-checking-login-function-using-valid-username-and-password;;2"
    },
    {
      "cells": [
        "pasupathy",
        "password"
      ],
      "line": 18,
      "id": "testing-hotel-booking-functionality-on-adactin-application;user-checking-login-function-using-valid-username-and-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 545200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launches browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Use logins into the application",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_launches_browser()"
});
formatter.result({
  "duration": 655714300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.use_logins_into_the_application()"
});
formatter.result({
  "duration": 279000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User checking login function using valid username and password",
  "description": "",
  "id": "testing-hotel-booking-functionality-on-adactin-application;user-checking-login-function-using-valid-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User enters valid username \"aaa\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enter valid password in password field \"bbbb\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User confirms that page navigates to hotel selection page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_application()"
});
formatter.result({
  "duration": 49700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aaa",
      "offset": 28
    }
  ],
  "location": "StepDefinition.user_enters_valid_username(String)"
});
formatter.result({
  "duration": 449294500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bbbb",
      "offset": 45
    }
  ],
  "location": "StepDefinition.user_enter_valid_password_in_password_field(String)"
});
formatter.result({
  "duration": 195707200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2798903800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_confirms_that_page_navigates_to_hotel_selection_page()"
});
formatter.result({
  "duration": 37800,
  "status": "passed"
});
formatter.after({
  "duration": 257700,
  "status": "passed"
});
formatter.before({
  "duration": 2415200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launches browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Use logins into the application",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_launches_browser()"
});
formatter.result({
  "duration": 119100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.use_logins_into_the_application()"
});
formatter.result({
  "duration": 143500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User checking login function using valid username and password",
  "description": "",
  "id": "testing-hotel-booking-functionality-on-adactin-application;user-checking-login-function-using-valid-username-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User enters valid username \"pasupathy\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enter valid password in password field \"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User confirms that page navigates to hotel selection page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_application()"
});
formatter.result({
  "duration": 34800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pasupathy",
      "offset": 28
    }
  ],
  "location": "StepDefinition.user_enters_valid_username(String)"
});
formatter.result({
  "duration": 207250500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 45
    }
  ],
  "location": "StepDefinition.user_enter_valid_password_in_password_field(String)"
});
formatter.result({
  "duration": 142507700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 3254832600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_confirms_that_page_navigates_to_hotel_selection_page()"
});
formatter.result({
  "duration": 45500,
  "status": "passed"
});
formatter.after({
  "duration": 963000,
  "status": "passed"
});
formatter.before({
  "duration": 245400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launches browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Use logins into the application",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_launches_browser()"
});
formatter.result({
  "duration": 2254700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.use_logins_into_the_application()"
});
formatter.result({
  "duration": 114500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User checking hotel selection functionality",
  "description": "",
  "id": "testing-hotel-booking-functionality-on-adactin-application;user-checking-hotel-selection-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "User logins into the application",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User selects location \"London\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User selects hotel \"Hotel Creek\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User selects room type \"Double\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User selects number of rooms \"1 - One\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User selects check in date as given in data file",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User selects check out date as given in data file",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User selects number of adults \"2 - Two\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User selects number of children as given in data file",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User clicks on search button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User checks page navigated to hotel booking page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_logins_into_the_application()"
});
formatter.result({
  "duration": 67200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_selects_location(String)"
});
formatter.result({
  "duration": 358667400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Creek",
      "offset": 20
    }
  ],
  "location": "StepDefinition.user_selects_hotel(String)"
});
formatter.result({
  "duration": 193397300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double",
      "offset": 24
    }
  ],
  "location": "StepDefinition.user_selects_room_type(String)"
});
formatter.result({
  "duration": 224352200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 - One",
      "offset": 30
    }
  ],
  "location": "StepDefinition.user_selects_number_of_rooms(String)"
});
formatter.result({
  "duration": 145621200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_check_in_date_as_given_in_data_file()"
});
formatter.result({
  "duration": 41400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_check_out_date_as_given_in_data_file()"
});
formatter.result({
  "duration": 45200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 - Two",
      "offset": 31
    }
  ],
  "location": "StepDefinition.user_selects_number_of_adults(String)"
});
formatter.result({
  "duration": 126620600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_number_of_children_as_given_in_data_file()"
});
formatter.result({
  "duration": 53400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_search_button()"
});
formatter.result({
  "duration": 2789075300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_checks_page_navigated_to_hotel_booking_page()"
});
formatter.result({
  "duration": 39000,
  "status": "passed"
});
formatter.after({
  "duration": 124200,
  "status": "passed"
});
formatter.before({
  "duration": 597400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launches browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Use logins into the application",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_launches_browser()"
});
formatter.result({
  "duration": 352400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.use_logins_into_the_application()"
});
formatter.result({
  "duration": 69900,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "User checking hotel availabilty function",
  "description": "",
  "id": "testing-hotel-booking-functionality-on-adactin-application;user-checking-hotel-availabilty-function",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "User logins into the application",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "User selects the preferred hotel",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User checks for confirmation message for hotel booking",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_logins_into_the_application()"
});
formatter.result({
  "duration": 30400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_preferred_hotel()"
});
formatter.result({
  "duration": 3046369800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_checks_for_confirmation_message_for_hotel_booking()"
});
formatter.result({
  "duration": 403400,
  "status": "passed"
});
formatter.after({
  "duration": 284200,
  "status": "passed"
});
formatter.before({
  "duration": 421600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launches browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Use logins into the application",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_launches_browser()"
});
formatter.result({
  "duration": 700300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.use_logins_into_the_application()"
});
formatter.result({
  "duration": 638200,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "User checks hotel booking functions",
  "description": "",
  "id": "testing-hotel-booking-functionality-on-adactin-application;user-checks-hotel-booking-functions",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "User logins into the application",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "User enters valid First name \"Pasupac\"",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "User enters valid Last name \"pc\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User enters valid billing address \"no1 street\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User enters valid credit card details \"1234567891234567\" \"1\" \"january\" \"2022\" \"222\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User clicks on Book now button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User checks whether page navigated to itenary",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_logins_into_the_application()"
});
formatter.result({
  "duration": 523100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pasupac",
      "offset": 30
    }
  ],
  "location": "StepDefinition.user_enters_valid_First_name(String)"
});
formatter.result({
  "duration": 274507700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pc",
      "offset": 29
    }
  ],
  "location": "StepDefinition.user_enters_valid_Last_name(String)"
});
formatter.result({
  "duration": 114417700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "no1 street",
      "offset": 35
    }
  ],
  "location": "StepDefinition.user_enters_valid_billing_address(String)"
});
formatter.result({
  "duration": 186410000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567891234567",
      "offset": 39
    },
    {
      "val": "1",
      "offset": 58
    },
    {
      "val": "january",
      "offset": 62
    },
    {
      "val": "2022",
      "offset": 72
    },
    {
      "val": "222",
      "offset": 79
    }
  ],
  "location": "StepDefinition.user_enters_valid_credit_card_details(String,String,String,String,String)"
});
formatter.result({
  "duration": 1124226100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_Book_now_button()"
});
formatter.result({
  "duration": 118365200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_checks_whether_page_navigated_to_itenary()"
});
formatter.result({
  "duration": 46600,
  "status": "passed"
});
formatter.after({
  "duration": 125700,
  "status": "passed"
});
});