import axios, { AxiosError } from "axios";
import type { 
  AxiosInstance, 
  AxiosRequestConfig, 
  InternalAxiosRequestConfig
} from "axios";
import { ENV } from "./env.utils";
import { getToken, isTokenExpired } from "./token.utils";
import type { ApiResponse, ApiError } from "../types/api.types";

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: ENV.API_URL,
      timeout: 30000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Interceptador de requisição para adicionar token
    this.client.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = getToken();
        if (token && !isTokenExpired(token)) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Interceptador de resposta para tratamento de erros
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        if (error.response?.status === 401) {
          // Token expirado ou inválido
          localStorage.removeItem("token");
        }
        return Promise.reject(this.formatError(error));
      }
    );
  }

  private formatError(error: AxiosError): ApiError {
    const errorData = error.response?.data as any;
    
    return {
      message: errorData?.message || error.message || "Erro na requisição",
      status: error.response?.status,
      code: error.code,
    };
  }

  /**
   * GET request
   */
  async get<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.get<T>(url, {
        ...config,
        withCredentials: true,
      });
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * POST request
   */
  async post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.post<T>(url, data, {
        ...config,
        withCredentials: true,
      });
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * PATCH request
   */
  async patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.patch<T>(url, data, {
        ...config,
        withCredentials: true,
      });
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * PUT request
   */
  async put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.put<T>(url, data, {
        ...config,
        withCredentials: true,
      });
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * DELETE request
   */
  async delete<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.delete<T>(url, {
        ...config,
        withCredentials: true,
      });
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Handle errors
   */
  private handleError(error: any): ApiError {
    if (error instanceof AxiosError) {
      return this.formatError(error);
    }
    
    return {
      message: error.message || "Erro desconhecido",
      code: error.code,
    };
  }

  /**
   * Get raw axios instance if needed
   */
  getRawClient(): AxiosInstance {
    return this.client;
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Export types
export type { ApiResponse, ApiError };
export default apiClient;