export interface HttpService {
    get<Response>(url: string, params?: Record<string, string>): Promise<Response>;
    post<Request, Response>(url: string, data?: Request): Promise<Response>;
    put<Request, Response>(url: string, data?: Request): Promise<Response>;
    patch<Request, Response>(url: string, data?: Request): Promise<Response>;
    delete<Response>(url: string): Promise<Response>;
}
