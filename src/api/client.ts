import { ApiError } from './types'

export interface RequestOptions extends RequestInit {
  params?: Record<string, string | number | boolean | undefined | null>
}

const BASE_URL = import.meta.env.VITE_API_URL || '/api'

/**
 * Generic HTTP client wrapper around native fetch.
 * Configure authentication headers, base URL, and response handling here.
 */
export async function apiClient<T>(
  endpoint: string,
  { params, headers, ...customConfig }: RequestOptions = {}
): Promise<T> {
  const url = new URL(
    endpoint.startsWith('http') ? endpoint : `${BASE_URL}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`,
    window.location.origin
  )

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, String(value))
      }
    })
  }

  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  const config: RequestInit = {
    ...customConfig,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
  }

  try {
    const response = await fetch(url.toString(), config)

    if (!response.ok) {
      let errorMessage = `Request failed with status ${response.status}`
      let errorDetails: unknown

      try {
        const errorBody = await response.json()
        errorMessage = errorBody.message || errorBody.error || errorMessage
        errorDetails = errorBody
      } catch {
        // Fallback to text if json parsing fails
        const text = await response.text().catch(() => '')
        if (text) errorMessage = text
      }

      throw new ApiError(errorMessage, response.status, response.statusText, errorDetails)
    }

    // Handle 204 No Content
    if (response.status === 204) {
      return {} as T
    }

    return (await response.json()) as T
  } catch (error) {
    if (error instanceof ApiError) {
      throw error
    }
    throw new ApiError(
      error instanceof Error ? error.message : 'An unexpected network error occurred',
      0
    )
  }
}

export const api = {
  get: <T>(endpoint: string, options?: RequestOptions) =>
    apiClient<T>(endpoint, { ...options, method: 'GET' }),

  post: <T>(endpoint: string, body?: unknown, options?: RequestOptions) =>
    apiClient<T>(endpoint, {
      ...options,
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined,
    }),

  put: <T>(endpoint: string, body?: unknown, options?: RequestOptions) =>
    apiClient<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: body ? JSON.stringify(body) : undefined,
    }),

  patch: <T>(endpoint: string, body?: unknown, options?: RequestOptions) =>
    apiClient<T>(endpoint, {
      ...options,
      method: 'PATCH',
      body: body ? JSON.stringify(body) : undefined,
    }),

  delete: <T>(endpoint: string, options?: RequestOptions) =>
    apiClient<T>(endpoint, { ...options, method: 'DELETE' }),
}
