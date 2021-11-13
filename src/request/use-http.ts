import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { request } from './request';

interface HttpProps extends AxiosRequestConfig {
  watch?: any[];
}

export const useHttpHook = <T>({
  url,
  method,
  data,
  params,
  watch = [],
  ...rest
}: HttpProps) => {
  const [result, setResult] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    request<T>({
      url,
      method,
      data,
      params,
      setResult,
      setLoading,
      ...rest,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, watch);

  // console.log('二次封装获取数据', result);

  return { result, loading };
};
