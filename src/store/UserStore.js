import { makeAutoObservable } from "mobx"

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._userInfo = {}
        this._users = []
        this._isLoginNotification = true
        makeAutoObservable(this)
    }

    setIsLoginNotification(param) {
        this._isLoginNotification = param
    }

    setUserInfo(user) {
        this._userInfo = user
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    setUsers(users) {
        this._users = users
    }

    get isLoginNotification() {
        return this._isLoginNotification
    }

    get userInfo() {
        return this._userInfo
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }

    get users() {
        return(this._users)
    }
}
