Feature: Login Test

Scenario: Login with valid test data

Given user launches ie browser And navigates to application url
When user enter username as "mercury" in username field
When user enter password as "mercury" in password field
And Click Signin
Then validates Login success