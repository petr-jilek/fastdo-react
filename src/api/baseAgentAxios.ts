import axios, { AxiosError, AxiosResponse } from "axios"
import { getToken } from "../services/identityService"
import { getLanguage } from "../services/languageService"

export const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

export const config = {
  on401: (_message: string | undefined, _showToast: boolean, _push: boolean) => {},
  on403: (_message: string | undefined, _showToast: boolean, _push: boolean) => {},
  onErrorDefault: (_message: string | undefined, _showToast: boolean, _push: boolean) => {},
}
axios.defaults.baseURL = process.env.REACT_APP_API_URL

axios.interceptors.request.use((config) => {
  var lang = getLanguage()
  if (lang) config.headers!["Accept-Language"] = lang

  const token = getToken()
  if (token) config.headers!.Authorization = `Bearer ${token}`
  return config
})

axios.interceptors.response.use(
  async (response) => {
    if (process.env.NODE_ENV === "development") await sleep(1000)
    return response
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

export interface ErrorModel {
  message?: string | undefined
  code?: number | undefined
  detail?: string | undefined
}

const responseBody = <T>(response: AxiosResponse<T>) => response.data

const handleError = (error: any, showToast: boolean, push: boolean): Promise<any> => {
  if (axios.isAxiosError(error)) {
    var axiosError = error as AxiosError
    const { data, status } = axiosError.response!
    var errorModel = data as ErrorModel

    handleErrorModel(status, errorModel, showToast, push)

    return Promise.reject(errorModel)
  } else {
    return Promise.reject(error)
  }
}

const handleErrorModel = (status: number, error: ErrorModel, showToast: boolean, push: boolean) => {
  switch (status) {
    case 401:
      config.on401(error.message, showToast, push)
      break
    case 403:
      config.on403(error.message, showToast, push)
      break
    default:
      config.onErrorDefault(error.message, showToast, push)
      break
  }
}

export const requests = {
  get: <T>(url: string, params: URLSearchParams | null = null, showToast = true, push = true): Promise<T> => {
    return axios
      .get<T>(url, { params })
      .then(responseBody)
      .catch((error) => handleError(error, showToast, push))
  },

  post: <T>(url: string, body: any = {}, headers: any = {}, showToast = true, push = true): Promise<T> => {
    return axios
      .post<T>(url, body, { headers: headers })
      .then(responseBody)
      .catch((error) => handleError(error, showToast, push))
  },

  put: <T>(url: string, body: any = {}, showToast = true, push = true): Promise<T> => {
    return axios
      .put<T>(url, body)
      .then(responseBody)
      .catch((error) => handleError(error, showToast, push))
  },

  del: <T>(url: string, showToast = true, push = true): Promise<T> => {
    return axios
      .delete<T>(url)
      .then(responseBody)
      .catch((error) => handleError(error, showToast, push))
  },
}
