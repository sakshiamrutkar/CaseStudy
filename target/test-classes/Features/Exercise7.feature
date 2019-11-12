Feature: Cart in TestMeApp
Scenario: Cart

Given user launches ie browser And navigates to TestMeApp
When user clicks on signin
When user enter username as "<username>"
When user enter password as "<password>"
And Click Login
Then validate Login success