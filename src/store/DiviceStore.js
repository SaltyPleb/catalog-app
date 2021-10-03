import { makeAutoObservable } from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Видеокарты'},
            {id: 2, name: 'Процессоры'},
            {id: 3, name: 'Материнские платы'},
            {id: 4, name: 'Оперативная память'},
            {id: 5, name: 'Системы охлаждения'},
            {id: 6, name: 'SSD'},
            {id: 7, name: 'Видеокарты'},
            {id: 8, name: 'Процессоры'},
            {id: 9, name: 'Материнские платы'},
            {id: 10, name: 'Оперативная память'},
            {id: 11, name: 'Системы охлаждения'},
            {id: 12, name: 'Видеокарты'},
            {id: 23, name: 'Процессоры'},
            {id: 34, name: 'Материнские платы'},
            {id: 4654, name: 'Оперативная память'},
            {id: 554, name: 'Системы охлаждения'},
            {id: 141, name: 'Видеокарты'},
            {id: 223, name: 'Процессоры'},
            {id: 32, name: 'Материнские платы'},
            {id: 4234, name: 'Оперативная память'},
            {id: 515, name: 'Системы охлаждения'},
            {id: 156, name: 'Видеокарты'},
            {id: 27, name: 'Процессоры'},
            {id: 38, name: 'Материнские платы'},
            {id: 49, name: 'Оперативная память'},
            {id: 58, name: 'Системы охлаждения'},
            {id: 1543, name: 'Видеокарты'},
            {id: 214, name: 'Процессоры'},
            {id: 31111, name: 'Материнские платы'},
            {id: 42314, name: 'Оперативная память'},
            {id: 5415, name: 'Системы охлаждения'},
            {id: 1654, name: 'Видеокарты'},
            {id: 2342, name: 'Процессоры'},
            {id: 331, name: 'Материнские платы'},
            {id: 423, name: 'Оперативная память'},
            {id: 51231, name: 'Системы охлаждения'},

        ]

        this._brands = [
            {id: 1, name: 'AMD'},
            {id: 2, name: 'Nvidea'},
            {id: 3, name: 'kriva'},
            {id: 4, name: 'lala'},
            {id: 5, name: 'last'}
        ]

        this._devices = [
            {id: 1, name: 'GTX 1660'},
            {id: 1, name: 'z1xt 60'},
            {id: 2, name: 'RTX 2060'},
            {id: 2, name: 'RTX 3060'},
            {id: 2, name: 'RTX 1060'},
            {id: 4, name: 'zxczcsad'},
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }
}
