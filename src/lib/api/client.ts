import {appConfig} from '@/app/config/env'
import {
    ApiError,
    type HttpRequestOptions,
    type ProblemDetail,
} from './types'

function buildUrl(
    path: string,
    params?: HttpRequestOptions['params'],
): string {
    const url = new URL(path.replace(/^\/+/, ''), `${appConfig.apiBaseUrl}/`)

    if (params) {
        for (const [key, value] of Object.entries(params)) {
            if (value == null) continue

            for (const item of Array.isArray(value) ? value : [value]) {
                url.searchParams.append(key, String(item))
            }
        }
    }

    return url.toString()
}

async function request<T>(
    path: string,
    options: HttpRequestOptions = {},
): Promise<T> {
    const headers = new Headers(options.headers)

    if (!headers.has('Accept')) {
        headers.set(
            'Accept',
            'application/json, application/problem+json',
        )
    }

    let body: BodyInit | undefined = options.body as BodyInit | undefined

    if (
        body != null &&
        typeof body !== 'string' &&
        !(body instanceof FormData) &&
        !(body instanceof Blob) &&
        !(body instanceof URLSearchParams)
    ) {
        if (!headers.has('Content-Type')) {
            headers.set('Content-Type', 'application/json')
        }

        body = JSON.stringify(body)
    }

    const response = await fetch(buildUrl(path, options.params), {
        ...options,
        method: options.method ?? 'GET',
        headers,
        body,
        credentials: options.credentials ?? 'include',
    })

    if (!response.ok) {
        const contentType = response.headers.get('content-type') ?? ''

        if (
            contentType.includes('application/problem+json') ||
            contentType.includes('application/json')
        ) {
            const problem = (await response.json().catch(() => null)) as
                | ProblemDetail
                | null

            if (problem) {
                throw new ApiError({
                    ...problem,
                    status: problem.status ?? response.status,
                })
            }
        }

        throw new ApiError({
            status: response.status,
            title: response.statusText || `HTTP error ${response.status}`,
            detail: await response.text().catch(() => undefined),
        })
    }

    if (response.status === 204) {
        return undefined as T
    }

    const contentType = response.headers.get('content-type') ?? ''

    if (contentType.includes('application/json')) {
        return response.json() as Promise<T>
    }

    return (await response.text()) as T
}

export const get = <T>(
    path: string,
    options?: Omit<HttpRequestOptions, 'method' | 'body'>,
) => request<T>(path, {
    ...options,
    method: 'GET',
});

export const post = <T>(
    path: string,
    body?: unknown,
    options?: Omit<HttpRequestOptions, 'method' | 'body'>,
) =>
    request<T>(path, {
        ...options,
        method: 'POST',
        body,
    });

export const put = <T>(
    path: string,
    body?: unknown,
    options?: Omit<HttpRequestOptions, 'method' | 'body'>,
) =>
    request<T>(path, {
        ...options,
        method: 'PUT',
        body,
    });

export const patch = <T>(
    path: string,
    body?: unknown,
    options?: Omit<HttpRequestOptions, 'method' | 'body'>,
) =>
    request<T>(path, {
        ...options,
        method: 'PATCH',
        body,
    });

export const del = <T>(
    path: string,
    options?: Omit<HttpRequestOptions, 'method' | 'body'>,
) =>
    request<T>
    (path, {
        ...options,
        method: 'DELETE',
    });

