Feature: Posts - API

Scenario: Count posts
    When user sends a request to posts to count the number of posts
    Then verify the number are equal 100

Scenario: A detail post
    When user sends a request to posts with ID = <id>
    Then verify information is accurate with ID = <id>

Examples: 
    | id |
    | 12 | 
    | 23 | 

Scenario: Add post
    When user sends a request to add more posts with ID = <id>
    Then verify new information is accurate with ID = <id>
Examples: 
    | id |
    | 101 | 

Scenario: Delete post
    When user sends a request to delete posts with ID = <id>
    Then verify new information is accurate with ID = <id> is deleted
Examples: 
    | id |
    | 101 | 