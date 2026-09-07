/**
 * Generic API response & request types.
 * Adapt these interfaces to match your backend's API conventions.
 */

export interface ApiResponse<T> {
  data: T
  message?: string
  status?: number
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

export interface PaginationParams {
  page?: number
  pageSize?: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
  search?: string
}

export class ApiError extends Error {
  status: number
  code?: string
  details?: unknown

  constructor(message: string, status: number = 500, code?: string, details?: unknown) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.code = code
    this.details = details
  }
}
