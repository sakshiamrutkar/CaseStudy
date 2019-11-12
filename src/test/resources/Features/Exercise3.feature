Feature: Login Test

Scenario Outline: Login with valid test data

Given user launches ie browser And navigates to application url
When user enter username as "<username>" in username field
When user enter password as "<password>" in password field
And Click Signin
Then validates Login success
Examples:
|username|password|
|mercury|mercury|
|ayuti|pagal|
|abc|def|
