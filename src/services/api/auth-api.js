import BaseApi from "./base-api"

class Auth extends BaseApi {
  signin = params => this.client.post("/users/login", params)
}

export const AuthApi = new Auth()
