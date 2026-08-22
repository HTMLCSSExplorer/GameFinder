import apiClient from '@/services/apiClient';
import { CanceledError, type AxiosError, type AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';

interface FetchedApiResponse<T> {
  id: number;
  results: T[];
}

export const useFetchData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [entities, setEntity] = useState<T[]>([]);
  const [error, setError] = useState<AxiosError | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      setError(null);
      apiClient
        .get<FetchedApiResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => setEntity(res.data.results))
        .catch((err: AxiosError) => {
          if (!(err instanceof CanceledError)) setError(err);
        })
        .finally(() => {
          if (!controller.signal.aborted) {
            setLoading(false);
          }
        });
      return () => controller.abort();
    },
    deps ? [endpoint, ...deps] : [endpoint]
  );

  return {
    error,
    entities,
    isLoading,
  };
};
