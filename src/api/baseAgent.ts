import { isDevelopment, sleep } from '..'
import { getToken } from '../services/identityService'
import { ErrorModel } from './baseAgentAxios'
import { ApiResponse, ErrorMiddlewareProps } from './models'
import { AdditionalRequestProps, DeleteProps, GetProps, PostProps, PutProps } from './props'

export const config = {
  baseUrl: '',
  developmentDelay: 2000,
  handleErrorMiddleware: (_props: ErrorMiddlewareProps): void => {},
  handleRequestMiddleware: (_url: string, _additional: AdditionalRequestProps, props: RequestInit): RequestInit => props
}

export const handleResponse = async <T>(response: Response): Promise<ApiResponse<T>> => {
  if (isDevelopment()) await sleep(config.developmentDelay)
  try {
    var responseJson = await response.json()
    if (!response.ok) {
      config.handleErrorMiddleware({
        response: response,
        statusCode: response.status,
        error: responseJson as ErrorModel
      })

      return {
        success: response.ok,
        value: undefined,
        error: responseJson as ErrorModel
      }
    } else {
      return {
        success: response.ok,
        value: responseJson as T,
        error: undefined
      }
    }
  } catch {
    if (!response.ok)
      config.handleErrorMiddleware({
        response: response,
        statusCode: response.status,
        error: responseJson as ErrorModel
      })

    return {
      success: response.ok,
      value: undefined,
      error: undefined
    }
  }
}

export const addContentTypeJson = (headers: HeadersInit | undefined): HeadersInit => {
  return {
    ...headers,
    'Content-type': 'application/json',
    charset: 'utf-8'
  }
}

export const addContentTypeFormData = (headers: HeadersInit | undefined): HeadersInit => {
  return {
    ...headers,
    'Content-type': 'multipart/form-data'
  }
}

export const addContentTypeUndefined = (headers: HeadersInit | undefined): HeadersInit => {
  return {
    ...headers,
    'Content-type': 'undefined'
  }
}

export const addBearerToken = (headers: HeadersInit | undefined): HeadersInit => {
  var token = getToken()
  if (token) {
    var newHeaders = {
      ...headers,
      Authorization: `Bearer ${token}`
    }
    return newHeaders
  }
  return headers ?? {}
}

export const addCookies = (headers: HeadersInit | undefined): HeadersInit => {
  var newHeaders = {
    ...headers,
    credentials: 'include'
  }
  return newHeaders
}

export const pureRequests = {
  get: async ({ url, urlSearchParams, additional = {}, requestInit = {} }: GetProps): Promise<Response> => {
    var newRequestInit = config.handleRequestMiddleware(url, additional, requestInit)
    var response = await fetch(config.baseUrl + url + (urlSearchParams ?? ''), {
      ...newRequestInit,
      method: 'GET'
    })
    return response
  },
  post: async ({ url, body, additional = {}, requestInit = {} }: PostProps): Promise<Response> => {
    var newRequestInit = config.handleRequestMiddleware(url, additional, requestInit)
    const response = await fetch(config.baseUrl + url, {
      ...newRequestInit,
      method: 'POST',
      body: additional.isForm ? body : JSON.stringify(body)
    })
    return response
  },
  put: async ({ url, body, additional = {}, requestInit = {} }: PutProps): Promise<Response> => {
    var newRequestInit = config.handleRequestMiddleware(url, additional, requestInit)
    const response = await fetch(config.baseUrl + url, {
      ...newRequestInit,
      method: 'PUT',
      body: additional.isForm ? body : JSON.stringify(body)
    })
    return response
  },
  del: async ({ url, additional = {}, requestInit = {} }: DeleteProps): Promise<Response> => {
    var newRequestInit = config.handleRequestMiddleware(url, additional, requestInit)
    const response = await fetch(config.baseUrl + url, {
      ...newRequestInit,
      method: 'DELETE'
    })
    return response
  }
}

export const requests = {
  get: async <T>({ url, urlSearchParams, additional = {}, requestInit = {} }: GetProps): Promise<ApiResponse<T>> => {
    const response = await pureRequests.get({
      url: url,
      urlSearchParams: urlSearchParams,
      additional: additional,
      requestInit: requestInit
    })
    return await handleResponse<T>(response)
  },
  post: async <T>({ url, body, additional = {}, requestInit = {} }: PostProps): Promise<ApiResponse<T>> => {
    const response = await pureRequests.post({ url: url, body: body, additional: additional, requestInit: requestInit })
    return await handleResponse<T>(response)
  },
  put: async <T>({ url, body, additional = {}, requestInit = {} }: PutProps): Promise<ApiResponse<T>> => {
    const response = await pureRequests.put({ url: url, body: body, additional: additional, requestInit: requestInit })
    return await handleResponse<T>(response)
  },
  del: async <T>({ url, additional = {}, requestInit = {} }: DeleteProps): Promise<ApiResponse<T>> => {
    const response = await pureRequests.del({ url: url, additional: additional, requestInit: requestInit })
    return await handleResponse<T>(response)
  }
}
