Feature: Get health check
  In order to get the status of service

  Scenario: A valid request for get health
    Given I send a GET request to "/health"
    Then the response status code should be 200
    Then the response body should be:
      """
      {
        "status": "OK"
      }
      """