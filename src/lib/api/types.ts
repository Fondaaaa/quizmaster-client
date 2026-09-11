export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface ProblemDetail {
    type?: string;
    title?: string;
    status?: number;
    detail?: string;
    instance?: string;
    properties?: Record<string, unknown>;
    [key: string]: unknown;
}

export type QueryParams = Record<
    string,
    string | number | boolean | undefined | null | Array<string | number | boolean>
>;

export interface HttpRequestOptions extends Omit<RequestInit, 'body'> {
    params?: QueryParams;
    body?: unknown;
}

export class ApiError extends Error {
    constructor(problem: ProblemDetail) {
        super(problem.title ?? `HTTP error ${problem.status}`)
        this.name = 'ApiError'
    }
}
