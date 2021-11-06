import { makeAutoObservable } from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = []

        this._brands = [
            {id: 1, name: '1'},
            {id: 2, name: '2'},
            {id: 3, name: '3'},
            {id: 4, name: '4'},
            {id: 5, name: '5'},
            {id: 6, name: '6'},
            {id: 7, name: '7'},
            {id: 8, name: '8'},
            {id: 9, name: '9'},
            {id: 10, name: '10'},
            {id: 11, name: '11'},
            {id: 12, name: '12'},
            {id: 13, name: '13'},
            {id: 14, name: '14'},
            {id: 15, name: '15'},
            {id: 16, name: '16'},

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
