export interface RequestProps {
  url: string
  headers?: HeadersInit
  requestInit?: RequestInit
}

export interface GetProps extends RequestProps {
  urlSearchParams?: URLSearchParams
}

export interface PostProps extends RequestProps {
  body?: any
}

export interface PutProps extends RequestProps {
  body?: any
}

export interface DeleteProps extends RequestProps {}
