import axios, { AxiosError, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse, Method } from 'axios';
import container from '@dependency';
import { Logger } from 'winston';
export default abstract class AxiosClientFactory {
  private logger: Logger = container.get('Shared.Logger');
  private axiosInstance: any = axios.create({});
  private request: string = '';
  private requestTime: Date | null = null;
  private responseSetTime: Date | null = null;

  protected async invoke<R, D>(
    url: string,
    method: Method,
    headers: AxiosRequestHeaders,
    data?: D,
    timeout: number = 30000
  ): Promise<AxiosResponse<R | never>> {
    try {
      this.axiosInstance = axios.create({
        headers: headers,
      });

      this.handleInterceptors();

      return await this.axiosInstance({ method, url, headers, data, timeout });
    } catch (error: any) {
      return error.response;
    }
  }

  private handleInterceptors = (): void => {
    this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        this.requestTime = new Date();
        this.request = `[ Request config ]: ${config.method?.toUpperCase() || ''} [ To ]: ${
          config.url || ''
        }  [ Body ] : ${JSON.stringify(config.data) || 'No Body'}`;
        return config;
      },
      (error: AxiosError<string>) => {
        this.logger.error(`[ Request Error ] CODE ${error.code || 'UNKNOWN'} | ${error.message}`);
        return error;
      }
    );

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        this.responseSetTime = new Date();
        const totalTime = this.responseSetTime.getTime() - this.requestTime!.getTime();
        this.logger.info(this.request);
        this.logger.info(`[ Time Request success ]: ${totalTime}ms`);
        this.logger.info(`[ Response ]: STATUS:${response.status}`);
        return response;
      },
      (error: AxiosError<string>) => {
        this.responseSetTime = new Date();
        const totalTime = this.responseSetTime.getTime() - this.requestTime!.getTime();
        this.logger.error(this.request);
        this.logger.error(`[ Time Request Error ] ${totalTime}ms`);
        this.logger.error(`[ Stack Error ] CODE ${error.stack || 'UNKNOWN'} | ${error.message}`);
        this.logger.error(`[ Response Error ] CODE ${error.code || 'UNKNOWN'} | ${error.message}`);
        return Promise.reject(error);
      }
    );
  };
}
