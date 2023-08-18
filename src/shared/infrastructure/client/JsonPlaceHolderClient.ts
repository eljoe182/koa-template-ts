import { AxiosResponse } from 'axios';
import AxiosClientFactory from './AxiosClientFactory';
import { HttpVerbs } from '../constants/HttpVerbs';

export default class JsonPlaceHolderClient extends AxiosClientFactory {
  async get<R>(url: string, headers: any): Promise<AxiosResponse<R>> {
    return this.invoke<R, void>(url, HttpVerbs.GET, headers);
  }

  async post<D, R>(url: string, body: D, headers: any): Promise<AxiosResponse> {
    return this.invoke<R, D>(url, HttpVerbs.POST, headers, body);
  }

  async put<D, R>(url: string, body: D, headers: any): Promise<AxiosResponse<R>> {
    return this.invoke<R, D>(url, HttpVerbs.PUT, headers, body);
  }

  async delete(url: string, headers: any): Promise<AxiosResponse<void>> {
    return this.invoke<void, void>(url, HttpVerbs.DELETE, headers);
  }

  async patch<D, R>(url: string, body: D, headers: any): Promise<AxiosResponse<R>> {
    return this.invoke<R, D>(url, HttpVerbs.PATCH, headers, body);
  }
}
