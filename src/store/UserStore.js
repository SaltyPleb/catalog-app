import { makeAutoObservable } from "mobx"

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._userInfo = {}
        this._users = []
        makeAutoObservable(this)
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
