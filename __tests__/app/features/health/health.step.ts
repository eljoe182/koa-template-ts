import { assert } from 'chai';
import request from 'supertest';
import { Given, Then } from '@cucumber/cucumber';
import { application } from '../start.step';

let _request: request.Test;
let _response: request.Response;

Given('I send a GET request to {string}', (route: string) => {
  _request = request(application.getHTTPServer()).get(route);
});

Then('the response status code should be {int}', async (status: number) => {
  _response = await _request.expect(status);
});

Then('the response body should be:', (response) => {
  assert.deepEqual(_response.body, JSON.parse(response));
});
