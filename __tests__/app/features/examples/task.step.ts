import request from 'supertest';
import { application } from '../start.step';
import { Given, Then } from '@cucumber/cucumber';
import { assert } from 'chai';

let _request: request.Test;
let _response: request.Response;

Given('I send a GET request to {string} for return all tasks', (route: string) => {
  _request = request(application.getHTTPServer()).get(route);
});

Then('the response for all tasks status code should be {int}', async (status: number) => {
  _response = await _request.expect(status);
});

Then('the response for all tasks body should be:', (response) => {
  assert.deepEqual(_response.body, JSON.parse(response));
});

Given('I send a POST request to {string} for new task with body:', (route: string, body) => {
  _request = request(application.getHTTPServer()).post(route).send(JSON.parse(body));
});

Then('the response body for the new task should be:', (response) => {
  assert.deepEqual(_response.body, JSON.parse(response));
});

Then('the response status code should be {int} for the new task', async (status: number) => {
  _response = await _request.expect(status);
});
