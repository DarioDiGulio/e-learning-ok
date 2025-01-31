import axios, {AxiosError, AxiosInstance} from "axios";
import {HttpService} from "./HttpService";
import {ErrorResponse} from "@/modules/core/http/ErrorResponse";

export class AxiosHttpService implements HttpService {
    private axiosInstance: AxiosInstance;

    constructor(baseURL: string) {
        this.axiosInstance = this.configWith(baseURL);
        this.addInterceptors();
    }

    private configWith(baseURL: string) {
        return axios.create({
            baseURL,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    private addInterceptors() {
        this.axiosInstance.interceptors.response.use(
            response => response,
            (error: AxiosError) => this.handleError(error)
        );
    }

    private handleError(error: AxiosError): never {
        if (!error.response) {
            throw new Error("No se pudo conectar con el servidor.");
        }
        const data = error.response.data as ErrorResponse;
        const {status} = error.response;
        switch (status) {
            case 401:
                throw new Error("No autorizado. Inicia sesión nuevamente.");
            case 403:
                throw new Error("Acceso denegado. No tienes permisos para realizar esta acción.");
            case 500:
                throw new Error(`Error interno del servidor: ${data.message || "Intenta más tarde."}`);
            default:
                throw new Error(data.message || "Error desconocido.");
        }
    }

    async get<Response>(url: string, params?: Record<string, unknown>): Promise<Response> {
        const response = await this.axiosInstance.get<Response>(url, { params });
        return response.data;
    }

    async post<Request, Response>(url: string, data: Request): Promise<Response> {
        const response = await this.axiosInstance.post<Response>(url, data);
        return response.data;
    }

    async put<Request, Response>(url: string, data: Request): Promise<Response> {
        const response = await this.axiosInstance.put<Response>(url, data);
        return response.data;
    }

    async patch<Request, Response>(url: string, data: Request): Promise<Response> {
        const response = await this.axiosInstance.patch<Response>(url, data);
        return response.data;
    }

    async delete<Response>(url: string): Promise<Response> {
        const response = await this.axiosInstance.delete<Response>(url);
        return response.data;
    }
}
