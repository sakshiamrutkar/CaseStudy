Feature: Login Test

Scenario Outline: Login with valid test data

Given user launches ie browser And navigates to TestMeApp
When user clicks on signin
When user enter username as "<username>"
When user enter password as "<password>"
And Click Login
Then validate Login success
Given user validate the login success
When user clicks on All Categories
When user clicks on Electronics
When user doubleclicks on Headphone
When user type headphone in the search bar
When user clicks on search button
And user click on Add to Cart button 
Then user clicks on Cart
Then user clicks on Checkout

Examples:
|username|password|
|Lalitha|Password123|