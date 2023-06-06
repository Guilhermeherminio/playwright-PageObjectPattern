@test1
Feature: Test PlayWright Page

    Scenario: Opening PlayWright page and adding items with sucess
        Given I PlayWright page
        When I fill "testAutomation" in TODO field with success
        Then I check item added
