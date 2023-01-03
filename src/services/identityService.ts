export interface IdentityUser {
  token: string | null
  actor: string | null
}

export const identityTokenKey = "identity_token"
export const identityActorKey = "identity_actor"

export const setUserLongTerm = (token: string, actor: string | null = null): void => {
  localStorage.setItem(identityTokenKey, token)
  if (actor) localStorage.setItem(identityActorKey, actor)
}

export const clearUserLongTerm = (): void => {
  localStorage.removeItem(identityTokenKey)
  localStorage.removeItem(identityActorKey)
}

export const getUserLongTerm = (): IdentityUser => {
  const token = localStorage.getItem(identityTokenKey)
  const actor = localStorage.getItem(identityActorKey)

  return {
    token: token ? token : null,
    actor: actor ? actor : null,
  }
}

export const getTokenLongTerm = (): string | null => {
  const token = localStorage.getItem(identityTokenKey)
  return token ? token : null
}

export const isLoggedInLongTerm = (): boolean => {
  const token = localStorage.getItem(identityTokenKey)
  if (token) return true
  return false
}

export const setUserSession = (token: string, actor: string | null = null): void => {
  sessionStorage.setItem(identityTokenKey, token)
  if (actor) localStorage.setItem(identityActorKey, actor)
}

export const clearUserSession = (): void => {
  sessionStorage.removeItem(identityTokenKey)
  sessionStorage.removeItem(identityActorKey)
}

export const getUserSession = (): IdentityUser => {
  const token = sessionStorage.getItem(identityTokenKey)
  const actor = sessionStorage.getItem(identityActorKey)

  return {
    token: token ? token : null,
    actor: actor ? actor : null,
  }
}

export const getTokenSession = (): string | null => {
  const token = sessionStorage.getItem(identityTokenKey)
  return token ? token : null
}

export const isLoggedInSession = (): boolean => {
  const token = sessionStorage.getItem(identityTokenKey)
  if (token) return true
  return false
}

export const setUser = (token: string, actor: string | null = null, longTerm: boolean = false): void => {
  clearAll()
  if (longTerm) setUserLongTerm(token, actor)
  else setUserSession(token, actor)
}

export const clearAll = (): void => {
  clearUserLongTerm()
  clearUserSession()
}

export const getUser = (): IdentityUser => {
  const user = getUserLongTerm()
  if (user.token) return user
  return getUserSession()
}

export const getToken = (): string | null => {
  const token = getTokenLongTerm()
  if (token) return token
  return getTokenSession()
}

export const isLoggedIn = (): boolean => {
  const token = getTokenLongTerm()
  if (token) return true
  return isLoggedInSession()
}
