import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "CPU" },
      { id: 2, name: "GPU" },
      { id: 3, name: "PowerSupply" },
      { id: 4, name: "MotherBoard" },
      { id: 5, name: "Case" },
    ];

    this._brands = [
      // {id: 1, name: '1'},
      // {id: 2, name: '2'},
      // {id: 3, name: '3'},
      // {id: 4, name: '4'},
      // {id: 5, name: '5'},
      // {id: 6, name: '6'},
      // {id: 7, name: '7'},
      // {id: 8, name: '8'},
      // {id: 9, name: '9'},
      // {id: 10, name: '10'},
      // {id: 11, name: '11'},
      // {id: 12, name: '12'},
      // {id: 13, name: '13'},
      // {id: 14, name: '14'},
      // {id: 15, name: '15'},
      // {id: 16, name: '16'},
    ];

    this._devices = [];
    this._oneType = [];
    this._selectedType = {};
    this._selectedBrand = {};
    this._deviceCardsView = [];

    this._searchText = "f";
    makeAutoObservable(this);
  }

  setDeviceCardsView(devices) {
    this._deviceCardsView = devices;
  }

  setTypes(types) {
    this._types = types;
  }

  setOneType(type) {
    this._oneType = type;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  setSearchText(text) {
    this._searchText = text;
  }

  get deviceCardsView() {
    return this._deviceCardsView;
  }

  get types() {
    return this._types;
  }

  get oneType() {
    return this._oneType;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }

  get searchText() {
    return this._searchText;
  }
}
