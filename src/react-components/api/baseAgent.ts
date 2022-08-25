import axios, { AxiosError, AxiosRequestHeaders, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import history from '../router/history';
import { getToken } from '../services/identityService';
import { getLanguage } from '../services/languageService';

export const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.request.use(config => {
    var lang = getLanguage()
    if (lang) config.headers!['Accept-Language'] = lang

    const token = getToken();
    if (token) config.headers!.Authorization = `Bearer ${token}`
    return config;
})

axios.interceptors.response.use(async response => {
    if (process.env.NODE_ENV === 'development') await sleep(1000);
    return response;
}, (error: AxiosError) => {
    return Promise.reject(error);
})

export interface ErrorModel {
    message?: string | undefined;
    code?: number | undefined;
    detail?: string | undefined;
}

const responseBody = <T>(response: AxiosResponse<T>) => response.data
const isErrorModel = (payload: any) => { return true }

const handleError = (error: any, showToast: boolean, push: boolean): Promise<any> => {
    if (axios.isAxiosError(error)) {
        var axiosError = error as AxiosError
        const { data, status } = axiosError.response!

        if (isErrorModel(data)) {
            var errorModel = data as ErrorModel

            handleErrorModel(status, errorModel, showToast, push)

            return Promise.reject(errorModel);
        }

        return Promise.reject(axiosError);
    } else {
        return Promise.reject(error);
    }
}

const handleErrorModel = (status: number, error: ErrorModel, showToast: boolean, push: boolean) => {
    switch (status) {
        case 401:
            if (showToast && error.message)
                toast.error(error.message)

            if (push)
                history.push("/login")

            break;

        case 403:
            if (showToast && error.message)
                toast.error(error.message)

            if (push)
                history.push("/login")

            break;

        default:
            if (showToast && error.message)
                toast.error(error.message)

            break;
    }
}

export const requests = {
    get: <T>(url: string, params: URLSearchParams | null = null, showToast = true, push = true): Promise<T> => {
        return axios.get<T>(url, { params })
            .then(responseBody)
            .catch(error => handleError(error, showToast, push))
    },

    post: <T>(url: string, body: any = {}, headers: AxiosRequestHeaders = {}, showToast = true, push = true): Promise<T> => {
        return axios.post<T>(url, body, { headers: headers })
            .then(responseBody)
            .catch(error => handleError(error, showToast, push))
    },

    put: <T>(url: string, body: any = {}, showToast = true, push = true): Promise<T> => {
        return axios.put<T>(url, body)
            .then(responseBody)
            .catch(error => handleError(error, showToast, push))
    },

    del: <T>(url: string, showToast = true, push = true): Promise<T> => {
        return axios.delete<T>(url)
            .then(responseBody)
            .catch(error => handleError(error, showToast, push))
    },
}
