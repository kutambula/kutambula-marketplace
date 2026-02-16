/**
 * Response da API padronizada
 */
export interface ApiResponse<T = any> {
  data: T;
  status: number;
  message?: string;
}

/**
 * Erro da API padronizado
 */
export interface ApiError {
  message: string;
  status?: number;
  code?: string;
}

/**
 * Config para requisição HTTP customizada
 */
export interface HttpRequestConfig {
  timeout?: number;
  retries?: number;
  headers?: Record<string, string>;
  [key: string]: any;
}
