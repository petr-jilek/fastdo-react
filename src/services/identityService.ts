export interface IdentityUser {
  token: string | null
  actor: string | null
}

export const identityTokenKey = "identity_token"
export const identityActorKey = "identity_actor"

export const setUser = (token: string, actor: string | null = null): void => {
  localStorage.setItem(identityTokenKey, token)
  if (actor) localStorage.setItem(identityActorKey, actor)
}

export const clearUser = (): void => {
  localStorage.removeItem(identityTokenKey)
  localStorage.removeItem(identityActorKey)
}

export const getUser = (): IdentityUser => {
  const token = localStorage.getItem(identityTokenKey)
  const actor = localStorage.getItem(identityActorKey)

  return {
    token: token ? token : null,
    actor: actor ? actor : null,
  }
}

export const getToken = (): string | null => {
  const token = localStorage.getItem(identityTokenKey)
  return token ? token : null
}

export const isLoggedIn = (): boolean => {
  const token = localStorage.getItem(identityTokenKey)
  if (token) return true
  return false
}
