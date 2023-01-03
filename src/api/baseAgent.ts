import { getToken } from "../services/identityService"

export interface AppResponse<T> {
  success: boolean
  value?: T | null
  error?: ErrorModel | null
}

export interface ErrorCode {
  block: number
  code: number
}

export interface ErrorModel {
  message?: string | undefined
  errorCode?: ErrorCode | undefined
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

export const config = {
  baseUrl: "",
  developmentDelay: 3000,
  handleErrorMiddleware: (_statusCode: number, _error: ErrorModel | null = null): void => {},
}

export const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

export const handleResponse = async <T>(response: Response): Promise<AppResponse<T>> => {
  if (process.env.NODE_ENV === "development") await sleep(config.developmentDelay)
  try {
    var responseJson = await response.json()
    if (!response.ok) config.handleErrorMiddleware(response.status, responseJson as ErrorModel)
    return {
      success: response.ok,
      value: responseJson as T,
      error: responseJson as ErrorModel,
    }
  } catch {
    if (!response.ok) config.handleErrorMiddleware(response.status)
    return {
      success: response.ok,
      value: null,
      error: null,
    }
  }
}

export const addContentTypeJsonToHeaders = (headers: HeadersInit) => {
  return {
    ...headers,
    "Content-type": "application/json",
    charset: "utf-8",
  }
}

export const addBearerTokenToHeaders = (headers: HeadersInit) => {
  var token = getToken()
  if (token) {
    var newHeaders = {
      ...headers,
      Authorization: `Bearer ${token}`,
    }
    return addContentTypeJsonToHeaders(newHeaders)
  }
  return addContentTypeJsonToHeaders(headers)
}

export const requests = {
  get: <T>({ url, urlSearchParams = null, headers = {} }: GetProps): Promise<AppResponse<T>> => {
    return fetch(config.baseUrl + url + (urlSearchParams ?? ""), {
      method: "GET",
      headers: headers,
    }).then((response) => handleResponse<T>(response))
  },
  post: <T>({ url, body = {}, headers = {} }: PostProps): Promise<AppResponse<T>> => {
    return fetch(config.baseUrl + url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: headers,
    }).then((response) => handleResponse<T>(response))
  },
  put: <T>({ url, body = {}, headers = {} }: PutProps): Promise<AppResponse<T>> => {
    return fetch(config.baseUrl + url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: headers,
    }).then((response) => handleResponse<T>(response))
  },
  del: <T>({ url, headers = {} }: DeleteProps): Promise<AppResponse<T>> => {
    return fetch(config.baseUrl + url, {
      method: "POST",
      headers: headers,
    }).then((response) => handleResponse<T>(response))
  },
}

export const requestsWithContentTypeJson = {
  get: <T>({ url, urlSearchParams = null, headers = {} }: GetProps): Promise<AppResponse<T>> => {
    headers = addContentTypeJsonToHeaders(headers)
    return requests.get<T>({ url: url, urlSearchParams: urlSearchParams, headers: headers })
  },
  post: <T>({ url, body = {}, headers = {} }: PostProps): Promise<AppResponse<T>> => {
    headers = addContentTypeJsonToHeaders(headers)
    return requests.post<T>({ url: url, body: body, headers: headers })
  },
  put: <T>({ url, body = {}, headers = {} }: PutProps): Promise<AppResponse<T>> => {
    headers = addContentTypeJsonToHeaders(headers)
    return requests.put<T>({ url: url, body: body, headers: headers })
  },
  del: <T>({ url, headers = {} }: DeleteProps): Promise<AppResponse<T>> => {
    headers = addContentTypeJsonToHeaders(headers)
    return requests.del<T>({ url: url, headers: headers })
  },
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
