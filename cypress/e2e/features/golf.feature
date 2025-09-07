Feature: Golf

    Scenario Outline: search for golf courses
        Given I open the golf page
        When I enter golf course <golfName>
        Then I click on Search

        Examples:
        | golfName |
        | Golf Vacations |
        | Wadeiras Country Club |
        | Heritage Pointe Golf Course |

    Scenario Outline: List country for golf courses
        Given I open the golf page
        When I select <countryName> for golf courses
        Then I click on Filter

        Examples:
        | countryName |
        | Mexico |
        | Cuba |