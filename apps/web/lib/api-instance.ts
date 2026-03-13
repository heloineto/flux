import Axios, { type AxiosError, type AxiosRequestConfig } from 'axios';
import { createClient } from './supabase/client';

export const AXIOS_INSTANCE = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const api = AXIOS_INSTANCE;

export async function apiInstance<T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> {
  const finalConfig = { ...config, ...options };

  const supabase = createClient();
  const session = await supabase.auth.getSession();
  const accessToken = session.data.session?.access_token;

  if (accessToken) {
    finalConfig.headers = {
      ...finalConfig.headers,
      Authorization: `Bearer ${accessToken}`,
    };
  }

  const response = await AXIOS_INSTANCE(finalConfig);

  return response.data;
}

export type ErrorType<Error> = AxiosError<Error>;
export type BodyType<BodyData> = BodyData;
