$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Exercise.feature");
formatter.feature({
  "name": "Test Registration",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Test Registration with valid data",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user open application",
  "keyword": "Given "
});
formatter.match({
  "location": "TestCase1.user_open_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Registration",
  "keyword": "When "
});
formatter.match({
  "location": "TestCase1.user_clicks_on_Registration()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users validates Registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "TestCase1.users_validates_Registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter firstname",
  "keyword": "When "
});
formatter.match({
  "location": "TestCase1.user_enter_firstname()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter lastname",
  "keyword": "When "
});
formatter.match({
  "location": "TestCase1.user_enter_lastname()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter password",
  "keyword": "When "
});
formatter.match({
  "location": "TestCase1.user_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter confirm password",
  "keyword": "When "
});
formatter.match({
  "location": "TestCase1.user_enter_confirm_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Register button",
  "keyword": "When "
});
formatter.match({
  "location": "TestCase1.user_click_on_Register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Registration success",
  "keyword": "Then "
});
formatter.match({
  "location": "TestCase1.user_validates_Registration_success()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/Exercise2.feature");
formatter.feature({
  "name": "Login Test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login with valid test data",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user launches ie browser And navigates to application url",
  "keyword": "Given "
});
formatter.match({
  "location": "TestCase2.user_launches_ie_browser_And_navigates_to_application_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username as \"mercury\" in username field",
  "keyword": "When "
});
formatter.match({
  "location": "TestCase2.user_enter_username_as_in_username_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter password as \"mercury\" in password field",
  "keyword": "When "
});
formatter.match({
  "location": "TestCase2.user_enter_password_as_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Signin",
  "keyword": "And "
});
formatter.match({
  "location": "TestCase2.click_Signin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validates Login success",
  "keyword": "Then "
});
formatter.match({
  "location": "TestCase2.validates_Login_success()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/Exercise3.feature");
formatter.feature({
  "name": "Login Test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login with valid test data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launches ie browser And navigates to application url",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter username as \"\u003cusername\u003e\" in username field",
  "keyword": "When "
});
formatter.step({
  "name": "user enter password as \"\u003cpassword\u003e\" in password field",
  "keyword": "When "
});
formatter.step({
  "name": "Click Signin",
  "keyword": "And "
});
formatter.step({
  "name": "validates Login success",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "mercury",
        "mercury"
      ]
    },
    {
      "cells": [
        "ayuti",
        "pagal"
      ]
    },
    {
      "cells": [
        "abc",
        "def"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with valid test data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launches ie browser And navigates to application url",
  "keyword": "Given "
});
formatter.match({
  "location": "TestCase2.user_launches_ie_browser_And_navigates_to_application_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username as \"mercury\" in username field",
  "keyword": "When "
});
formatter.match({
  "location": "TestCase2.user_enter_username_as_in_username_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter password as \"mercury\" in password field",
  "keyword": "When "
});
formatter.match({
  "location": "TestCase2.user_enter_password_as_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Signin",
  "keyword": "And "
});
formatter.match({
  "location": "TestCase2.click_Signin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validates Login success",
  "keyword": "Then "
});
formatter.match({
  "location": "TestCase2.validates_Login_success()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with valid test data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launches ie browser And navigates to application url",
  "keyword": "Given "
});
formatter.match({
  "location": "TestCase2.user_launches_ie_browser_And_navigates_to_application_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username as \"ayuti\" in username field",
  "keyword": "When "
});
formatter.match({
  "location": "TestCase2.user_enter_username_as_in_username_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter password as \"pagal\" in password field",
  "keyword": "When "
});
formatter.match({
  "location": "TestCase2.user_enter_password_as_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Signin",
  "keyword": "And "
});
formatter.match({
  "location": "TestCase2.click_Signin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validates Login success",
  "keyword": "Then "
});
formatter.match({
  "location": "TestCase2.validates_Login_success()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with valid test data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launches ie browser And navigates to application url",
  "keyword": "Given "
});
formatter.match({
  "location": "TestCase2.user_launches_ie_browser_And_navigates_to_application_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username as \"abc\" in username field",
  "keyword": "When "
});
formatter.match({
  "location": "TestCase2.user_enter_username_as_in_username_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter password as \"def\" in password field",
  "keyword": "When "
});
formatter.match({
  "location": "TestCase2.user_enter_password_as_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Signin",
  "keyword": "And "
});
formatter.match({
  "location": "TestCase2.click_Signin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validates Login success",
  "keyword": "Then "
});
formatter.match({
  "location": "TestCase2.validates_Login_success()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/Exercise4.feature");
formatter.feature({
  "name": "TestMeApp scenarios",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "TestMeApp Login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user login testmeapp using valid credentials",
  "keyword": "* "
});
formatter.match({
  "location": "TestCase2.user_login_testmeapp_using_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "search products - testmeapp",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@search"
    }
  ]
});
formatter.step({
  "name": "user searching for products available in catalog",
  "keyword": "* "
});
formatter.match({
  "location": "TestCase2.user_searching_for_products_available_in_catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "add product - testmeapp",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@add"
    }
  ]
});
formatter.step({
  "name": "user adding products to cart",
  "keyword": "* "
});
formatter.match({
  "location": "TestCase2.user_adding_products_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "logout - testmeapp",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@logout"
    }
  ]
});
formatter.step({
  "name": "user performs logout",
  "keyword": "* "
});
formatter.match({
  "location": "TestCase2.user_performs_logout()"
});
formatter.result({
  "status": "passed"
});
});