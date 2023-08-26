Feature: Task Services
  In order to get the status of service

  Scenario: A valid request for get all tasks
    Given I send a GET request to "/all-tasks" for return all tasks
    Then the response for all tasks status code should be 200
    Then the response for all tasks body should be:
      """
      [
        {
          "_id": "64ea71bbac9fbb96664f246e",
          "name": "John Doe",
          "description": "This is a test task",
          "completed": false,
          "createdAt": "2023-08-26T21:42:19.770Z",
          "updatedAt": "2023-08-26T21:42:19.770Z"
        }
      ]
      """

  Scenario: Create a new task
    Given I send a POST request to "/add-task" for new task with body:
      """
      {
        "name": "Task 1",
        "description": "Description 1"
      }
      """
    Then the response status code should be 201 for the new task
    Then the response body for the new task should be:
      """
      {
        "message": "Task added successfully"
      }
      """
