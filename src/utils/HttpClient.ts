import axios, { AxiosInstance, AxiosResponse } from "axios";

export class HttpClient {

    private _axios: AxiosInstance;

    constructor() {
        this._axios = axios.create({
            baseURL: `https://jsonplaceholder.typicode.com/`
        });
    }

    async post<T>(url: string, data?: any): Promise<AxiosResponse<T>> {
        let response = await this._axios.post<T>(url, data);

        return response;
    }

    async get<T>(url: string): Promise<AxiosResponse<T>> {
        let response = await this._axios.get<T>(url);

        return response;
    }
}