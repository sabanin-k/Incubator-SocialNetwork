import { instance } from "./api"

export const authAPI = {
    getAuth() {
        return instance.get('auth/me').then(response => response.data)
    },
    login(values) {
        return instance.post('auth/login', values).then(response => response.data)
    },
    logout() {
        return instance.delete('auth/login').then(response => response.data)
    },
    getCaptcha() {
        return instance.get('security/get-captcha-url').then(response => response.data)
    }
}
// getAyth get:
    // data: required(object)
        // id: required(number)
        // email: required(string)
        // login: required(string)
    // resultCode: required(number)
    // messages: required(array of string)

// login post:
    // data: required(object)
    // resultCode: required(number)
    // messages: required(array of string)

// logout delete:
    // data: required(object)
    // resultCode: required(number)
    // messages: required(array of string)



