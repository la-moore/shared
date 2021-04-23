export class Auth {
  constructor(public raw) {
    this.deserialize(raw)
  }

  refreshing = false
  accessToken = ''
  refreshToken = ''
  expiresIn = 0
  timestamp = 0

  get expiresAt() {
    return Date.now() + (this.expiresIn * 1000)
  }

  serialize() {
    return {
      access_token: this.accessToken,
      refresh_token: this.refreshToken,
      expires_in: this.expiresIn,
      timestamp: this.timestamp,
    }
  }

  deserialize(raw) {
    this.accessToken = raw.access_token
    this.refreshToken = raw.refresh_token
    this.expiresIn = raw.expires_in
    this.timestamp = raw.timestamp || Date.now()
  }
}
