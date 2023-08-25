import { AxiosHeaders, AxiosResponse } from 'axios';
import AxiosClientFactory from './AxiosClientFactory';
import { HttpVerbs } from '../constants/HttpVerbs';

export default class JsonPlaceHolderClient extends AxiosClientFactory {
  private headers: AxiosHeaders;

  constructor() {
    super();
    this.headers = new AxiosHeaders();
    this.headers['content-type'] = 'application/json';
    this.headers['accept'] = 'application/json';
  }
  async get<R>(url: string, headers = this.headers): Promise<AxiosResponse<R>> {
    return this.invoke<R, void>(url, HttpVerbs.GET, headers);
  }
}
