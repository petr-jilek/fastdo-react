import { ApiResponse } from './models'

export const safeCall = async <T>(fn: () => Promise<ApiResponse<T>>) => {
  try {
    const response = await fn()
    return response
  } catch {
    return {
      success: false,
      value: undefined,
      error: undefined
    }
  }
}
