import { reactive, toRef } from 'vue'
import { Storage } from '../storage/local'
import { Api } from '../api'
import { Auth } from './auth'

interface LoginOptions {
  email: string,
  password: string,
}

interface stateInterface {
  auth?: Auth,
  eventId?: string,
}

export const state: stateInterface = reactive({
  auth: undefined,
  eventId: undefined
})

if (Storage.get('auth')) {
  state.auth = new Auth(Storage.get('auth'))
}

async function login(options: LoginOptions) {
  const { data } = await Api.fetch({
    url: '/oauth/token',
    resource: 'oauth',
    method: 'POST',
    body: options
  })

  setToken(data)

  return data
}

async function forgot(options: { email: string}) {
  const data = await Api.fetch({
    url: '/auth/forgot',
    method: 'POST',
    body: options
  })

  if (data.errors) {
    return Promise.reject(data)
  }

  return data
}

async function reset(options: { email: string}) {
  const data = await Api.fetch({
    url: '/auth/reset',
    method: 'POST',
    body: options
  })

  if (data.errors) {
    return Promise.reject(data)
  }

  return data
}

async function logout() {
  state.auth = undefined
  Storage.remove('auth')
}

async function refresh() {
  if (!state.auth) {
    throw new Error('Not authorized')
  }

  const { data } = await Api.fetch({
    url: '/oauth/token/refresh',
    resource: 'oauth',
    method: 'POST',
    body: {
      refresh_token: state.auth?.refreshToken
    }
  })

  setToken(data)

  return data
}

export function setToken(token) {
  state.auth = new Auth(token)
  Storage.set('auth', state.auth.serialize())
}

function setEventId(eventId) {
  state.eventId = eventId
}

export function useAuth() {
  return {
    auth: toRef(state, 'auth'),
    eventId: toRef(state, 'eventId'),
    setEventId,
    setToken,
    refresh,
    logout,
    forgot,
    reset,
    login
  }
}
