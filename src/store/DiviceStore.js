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
            {id: 1, name: 'Видеокарты'},
            {id: 2, name: 'Процессоры'},
            {id: 3, name: 'Материнские платы'},
            {id: 4, name: 'Оперативная память'},
            {id: 5, name: 'Системы охлаждения'},
            {id: 1, name: 'Видеокарты'},
            {id: 2, name: 'Процессоры'},
            {id: 3, name: 'Материнские платы'},
            {id: 4, name: 'Оперативная память'},
            {id: 5, name: 'Системы охлаждения'},
            {id: 1, name: 'Видеокарты'},
            {id: 2, name: 'Процессоры'},
            {id: 3, name: 'Материнские платы'},
            {id: 4, name: 'Оперативная память'},
            {id: 5, name: 'Системы охлаждения'},
            {id: 1, name: 'Видеокарты'},
            {id: 2, name: 'Процессоры'},
            {id: 3, name: 'Материнские платы'},
            {id: 4, name: 'Оперативная память'},
            {id: 5, name: 'Системы охлаждения'},
            {id: 1, name: 'Видеокарты'},
            {id: 2, name: 'Процессоры'},
            {id: 3, name: 'Материнские платы'},
            {id: 4, name: 'Оперативная память'},
            {id: 5, name: 'Системы охлаждения'},
            {id: 1, name: 'Видеокарты'},
            {id: 2, name: 'Процессоры'},
            {id: 3, name: 'Материнские платы'},
            {id: 4, name: 'Оперативная память'},
            {id: 5, name: 'Системы охлаждения'},

        ]

        this._brands = [
            {id: 1, name: 'AMD'},
            {id: 2, name: 'Nvidea'}
        ]

        this._devices = [
            {id: 1, name: 'GTX 1660'},
            {id: 2, name: 'RTX 2060'},
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
