import apiClient from '@/services/apiClient';
import { CanceledError, type AxiosError, type AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';

interface FetchedApiResponse<T> {
  id: number;
  results: T[];
}

export const useFetchData = <T>(
  endpoint: string,
  config?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [enntities, setEnntity] = useState<T[]>([]);
  const [error, setError] = useState<AxiosError | null>(null);
  const [isLoadinng, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      setError(null);
      apiClient
        .get<FetchedApiResponse<T>>(endpoint, {
          signal: controller.signal,
          ...config,
        })
        .then((res) => setEnntity(res.data.results))
        .catch((err: AxiosError) => {
          if (!(err instanceof CanceledError)) setError(err);
        })
        .finally(() => {
          if (!controller.signal.aborted) {
            console.log('not aborted');
            setLoading(false);
          }
        });
      return () => controller.abort();
    },
    deps ? [endpoint, ...deps] : [endpoint]
  );

  return {
    error,
    enntities,
    isLoadinng,
  };
};
