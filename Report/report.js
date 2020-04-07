$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/adactin/feature/adactin.feature");
formatter.feature({
  "line": 2,
  "name": "Testing Hotel booking functionality on adactin application",
  "description": "",
  "id": "testing-hotel-booking-functionality-on-adactin-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.before({
  "duration": 81800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Use logins into the application",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_launches_browser()"
});
formatter.result({
  "duration": 390026600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.use_logins_into_the_application()"
});
formatter.result({
  "duration": 197800,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "User logins facebook home page",
  "description": "",
  "id": "testing-hotel-booking-functionality-on-adactin-application;user-logins-facebook-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 52,
  "name": "User opens facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "User enters valid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "User checks whether user logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_opens_facebook_website()"
});
formatter.result({
  "duration": 27800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_valid_username_and_password()"
});
formatter.result({
  "duration": 36115042800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"u_0_c\"]/a\"}\n  (Session info: chrome\u003d80.0.3987.149)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MAA-5CG7141LPZ\u0027, ip: \u0027192.168.8.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\pasupac\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:61078}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 90ada88129bf2ff0fc1550069ae06d44\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"u_0_c\"]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_enters_valid_username_and_password(StepDefinition.java:198)\r\n\tat ✽.When User enters valid username and password(src/test/java/com/adactin/feature/adactin.feature:53)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_checks_whether_user_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 188200,
  "status": "passed"
});
}); "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Use logins into the application",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_launches_browser()"
});
formatter.result({
  "duration": 60600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.use_logins_into_the_application()"
});
formatter.result({
  "duration": 269900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User checking login function using valid username and password",
  "description": "",
  "id": "testing-hotel-booking-functionality-on-adactin-application;user-checking-login-function-using-valid-username-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User enters valid username \"pasupathy\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enter valid password in password field \"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User confirms that page navigates to hotel selection page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_application()"
});
formatter.result({
  "duration": 19800,
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
  "duration": 333370000,
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
  "duration": 156893000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1899810600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_confirms_that_page_navigates_to_hotel_selection_page()"
});
formatter.result({
  "duration": 39200,
  "status": "passed"
});
formatter.after({
  "duration": 102000,
  "status": "passed"
});
formatter.before({
  "duration": 76600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Use logins into the application",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_launches_browser()"
});
formatter.result({
  "duration": 79600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.use_logins_into_the_application()"
});
formatter.result({
  "duration": 68500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User checking hotel selection functionality",
  "description": "",
  "id": "testing-hotel-booking-functionality-on-adactin-application;user-checking-hotel-selection-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "User logins into the application",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User selects location \"London\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User selects hotel \"Hotel Creek\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User selects room type \"Double\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User selects number of rooms \"1 - One\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User selects check in date as given in data file",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User selects check out date as given in data file",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User selects number of adults \"2 - Two\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User selects number of children as given in data file",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User clicks on search button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User checks page navigated to hotel booking page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_logins_into_the_application()"
});
formatter.result({
  "duration": 39600,
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
  "duration": 784616300,
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
  "duration": 404143200,
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
  "duration": 406445100,
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
  "duration": 215189700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_check_in_date_as_given_in_data_file()"
});
formatter.result({
  "duration": 31100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_check_out_date_as_given_in_data_file()"
});
formatter.result({
  "duration": 24300,
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
  "duration": 364161900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_number_of_children_as_given_in_data_file()"
});
formatter.result({
  "duration": 43900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_search_button()"
});
formatter.result({
  "duration": 1859060900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_checks_page_navigated_to_hotel_booking_page()"
});
formatter.result({
  "duration": 323000,
  "status": "passed"
});
formatter.after({
  "duration": 132000,
  "status": "passed"
});
formatter.before({
  "duration": 62700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Use logins into the application",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_launches_browser()"
});
formatter.result({
  "duration": 51900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.use_logins_into_the_application()"
});
formatter.result({
  "duration": 73600,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "User checking hotel availabilty function",
  "description": "",
  "id": "testing-hotel-booking-functionality-on-adactin-application;user-checking-hotel-availabilty-function",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "User logins into the application",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "User selects the preferred hotel",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User checks for confirmation message for hotel booking",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_logins_into_the_application()"
});
formatter.result({
  "duration": 17800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_preferred_hotel()"
});
formatter.result({
  "duration": 1845317000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_checks_for_confirmation_message_for_hotel_booking()"
});
formatter.result({
  "duration": 24300,
  "status": "passed"
});
formatter.after({
  "duration": 73700,
  "status": "passed"
});
formatter.before({
  "duration": 70800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Use logins into the application",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_launches_browser()"
});
formatter.result({
  "duration": 50600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.use_logins_into_the_application()"
});
formatter.result({
  "duration": 57100,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "User checks hotel booking functions",
  "description": "",
  "id": "testing-hotel-booking-functionality-on-adactin-application;user-checks-hotel-booking-functions",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "User logins into the application",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "User enters valid First name \"Pasupac\"",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "User enters valid Last name \"pc\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User enters valid billing address \"no1 street\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User enters valid credit card details \"1234567891234567\" \"1\" \"january\" \"2022\" \"222\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User clicks on Book now button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User checks whether page navigated to itenary",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_logins_into_the_application()"
});
formatter.result({
  "duration": 19500,
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
  "duration": 264783600,
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
  "duration": 125258500,
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
  "duration": 284099600,
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
  "duration": 1520622400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_Book_now_button()"
});
formatter.result({
  "duration": 143241800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_checks_whether_page_navigated_to_itenary()"
});
formatter.result({
  "duration": 18600,
  "status": "passed"
});
formatter.after({
  "duration": 79500,
  "status": "passed"
});
formatter.before({
  "duration": 68300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Use logins into the application",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_launches_browser()"
});
formatter.result({
  "duration": 72400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.use_logins_into_the_application()"
});
formatter.result({
  "duration": 58300,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "User logins facebook home page",
  "description": "",
  "id": "testing-hotel-booking-functionality-on-adactin-application;user-logins-facebook-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 52,
  "name": "User opens facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "User enters valid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "User checks whether user logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_opens_facebook_website()"
});
formatter.result({
  "duration": 19900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_valid_username_and_password()"
});
formatter.result({
  "duration": 21440264800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"u_0_c\"]/a\"}\n  (Session info: chrome\u003d80.0.3987.149)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MAA-5CG7141LPZ\u0027, ip: \u0027192.168.8.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\pasupac\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:61078}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 90ada88129bf2ff0fc1550069ae06d44\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"u_0_c\"]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_enters_valid_username_and_password(StepDefinition.java:198)\r\n\tat ✽.When User enters valid username and password(src/test/java/com/adactin/feature/adactin.feature:53)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_checks_whether_user_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 82200,
  "status": "passed"
});
});