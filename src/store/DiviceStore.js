import { makeAutoObservable } from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = []

        this._brands = [
            {id: 1, name: 'AMD'},
            {id: 2, name: 'Nvidea'},
            {id: 3, name: 'kriva'},
            {id: 4, name: 'lala'},
            {id: 5, name: 'last'},
            {id: 6, name: 'fdsgdsg'},
        ]

        this._devices = [
            {id: 1, name: 'GTX 1660'},
            {id: 2, name: 'z1xt 60'},
            {id: 3, name: 'RTX 2060'},
            {id: 4, name: 'RTX 3060'},
            {id: 5, name: 'RTX 1060'},
            {id: 6, name: 'i7'},
            {id: 7, name: 'a4'},
        ]
        this._selectedType = {}

        this._searchText = "f"
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

    setSelectedType(type) {
        this._selectedType = type
    }

    setSearchText(text){
        this._searchText = text
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

    get selectedType() {
        return this._selectedType
    }

    get searchText(){
        return this._searchText
    }
}
