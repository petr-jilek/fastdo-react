import { getToken } from "../services/identityService"

export interface AppResponse<T> {
  success: boolean
  value?: T
  error?: ErrorModel
}

export interface ErrorModel {
  message?: string | undefined
  code?: number | undefined
  detail?: string | undefined
}

export interface GetProps {
  url: string
  urlSearchParams?: URLSearchParams | null
  headers?: HeadersInit
}

export interface PostProps {
  url: string
  body?: any
  headers?: HeadersInit
}

export interface PutProps {
  url: string
  body?: any
  headers?: HeadersInit
}

export interface DeleteProps {
  url: string
  headers?: HeadersInit
}

export const handleResponse = async <T>(response: Response): Promise<AppResponse<T>> => {
  var responseJson = await response.json()
  var responseData: AppResponse<T> = {
    success: response.ok,
    value: responseJson as T,
    error: responseJson as ErrorModel,
  }
  return responseData
}

export const addBearerTokenToHeaders = (headers: HeadersInit) => {
  var token = getToken()
  if (token) {
    return {
      ...headers,
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  }
  return headers
}

export const requestsWithBearerToken = {
  get: <T>({ url, urlSearchParams = null, headers = {} }: GetProps): Promise<AppResponse<T>> => {
    headers = addBearerTokenToHeaders(headers)
    return requests.get<T>({ url: url, urlSearchParams: urlSearchParams, headers: headers })
  },
  post: <T>({ url, body = {}, headers = {} }: PostProps): Promise<AppResponse<T>> => {
    headers = addBearerTokenToHeaders(headers)
    return requests.post<T>({ url: url, body: body, headers: headers })
  },
  put: <T>({ url, body = {}, headers = {} }: PutProps): Promise<AppResponse<T>> => {
    headers = addBearerTokenToHeaders(headers)
    return requests.put<T>({ url: url, body: body, headers: headers })
  },
  del: <T>({ url, headers = {} }: DeleteProps): Promise<AppResponse<T>> => {
    headers = addBearerTokenToHeaders(headers)
    return requests.del<T>({ url: url, headers: headers })
  },
}

export const requests = {
  get: <T>({ url, urlSearchParams = null, headers = {} }: GetProps): Promise<AppResponse<T>> => {
    return fetch(url + (urlSearchParams ?? ""), {
      method: "GET",
      headers: headers,
    }).then((response) => handleResponse<T>(response))
  },
  post: <T>({ url, body = {}, headers = {} }: PostProps): Promise<AppResponse<T>> => {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: headers,
    }).then((response) => handleResponse<T>(response))
  },
  put: <T>({ url, body = {}, headers = {} }: PutProps): Promise<AppResponse<T>> => {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: headers,
    }).then((response) => handleResponse<T>(response))
  },
  del: <T>({ url, headers = {} }: DeleteProps): Promise<AppResponse<T>> => {
    return fetch(url, {
      method: "POST",
      headers: headers,
    }).then((response) => handleResponse<T>(response))
  },
}
