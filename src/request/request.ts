import { AxiosRequestConfig } from 'axios';
import axios from './axios';

interface HttpProps extends AxiosRequestConfig {
  setLoading?: (value: boolean) => void;
  setResult?: (value: any) => void;
}

export const request = <T>({
  url,
  method = 'GET',
  params,
  data,
  setLoading,
  setResult,
  ...rest
}: HttpProps): Promise<T> => {
  console.log('执行axios');
  setLoading && setLoading(true);
  return new Promise((resolve, reject) => {
    axios({ url, method, data, params, ...rest })
      .then(res => {
        setResult && setResult(res.data);
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      })
      .finally(() => {
        setLoading && setLoading(false);
      });
  });
};
