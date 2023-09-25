export interface AdditionalRequestProps {
  isForm?: boolean
}

export interface RequestProps {
  url: string
  additional?: AdditionalRequestProps
  requestInit?: RequestInit
}

export interface GetProps extends RequestProps {
  urlSearchParams?: URLSearchParams
}

export interface PostProps extends RequestProps {
  body?: any
  isForm?: boolean
}

export interface PutProps extends RequestProps {
  body?: any
  isForm?: boolean
}

export interface DeleteProps extends RequestProps {}
