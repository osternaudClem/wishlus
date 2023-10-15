export const url = {
  api: {
    local: 'http://localhost:4200',
  },
};

const API = url.api.local;

export interface CallApi {
  method?: string;
  cache?: string;
  body?: unknown;
  endpoint: string;
}

export interface CallApiResponse {
  status?: number | null;
  error?: boolean;
  datas?: unknown;
  errorMessage?: string;
}

export const callApi = async ({
  method = 'GET',
  cache = 'no-cache',
  body = null,
  endpoint = '',
}: CallApi): Promise<CallApiResponse> => {
  const config: RequestInit = {
    method,
    mode: 'cors',
    cache: cache as RequestCache,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer 2a6d402915efb7e02e2144057c2ab170`,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${API}${endpoint}`, config);
  return response.json() as Promise<CallApiResponse>;
};

export default callApi;
