$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/adactin/feature/adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Testing Hotel booking functionality on adactin application",
  "description": "",
  "id": "testing-hotel-booking-functionality-on-adactin-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3024000,
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
  "duration": 13011700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.use_logins_into_the_application()"
});
formatter.result({
  "duration": 106900,
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
  "duration": 115500,
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
  "duration": 40750900,
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MAA-5CG7141LPZ\u0027, ip: \u0027192.168.43.140\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\pasupac\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:59738}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 3dab4ba79ccf03d40af713543d2e4868\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"first_name\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.sendKeys(Unknown Source)\r\n\tat com.adactin.baseclass.BaseClass.sendingKey(BaseClass.java:351)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_enters_valid_First_name(StepDefinition.java:147)\r\n\tat ✽.When User enters valid First name \"Pasupac\"(src/test/java/com/adactin/feature/adactin.feature:43)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_Book_now_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_checks_whether_page_navigated_to_itenary()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 120200,
  "status": "passed"
});
});