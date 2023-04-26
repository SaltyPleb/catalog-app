import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._currentComponents = {
      // GPU: "GPU c",
      // CPU: "CPU c",
      // PowerSupply: "PowerSupply c",
      // MotherBoard: "MotherBoard c",
      // Case: "Case c",
      // HDD: "HDD c",
      // SSD: "SSD c",
    };

    this._systems = [
      {
        title: "NewTestSystem",
        components: {
          GPU: "GPU",
          CPU: "CPU",
          PowerSupply: "PowerSupply",
          MotherBoard: "MotherBoard",
          Case: "Case",
          HDD: "HDD",
          SSD: "SSD",
        },
        init_params: {
          mailHost: "mail1",
          "config:installationAt": "Philadelphia, PA",
          "config:poweredBy": "Cofax",
          "config:poweredByIcon": "/images/cofax.gif",
          "config:staticPath": "/content/static",
        },
        system_params: {
          creatorName: "Yauheni Bulyha",
          creatorPrefix: "YB",
          systemName: "NewTestSystem",
          creationDate: "2022-08-27",
          systemStarts: "140",
          id: "14",
        },
      },
      {
        title: "New Test System 2",
        components: {
          GPU: "GPU",
          CPU: "CPU",
          PowerSupply: "PowerSupply",
          MotherBoard: "MotherBoard",
          Case: "Case",
          HDD: "HDD",
          SSD: "SSD",
        },
        init_params: {
          mailHost: "mail1",
          "config:installationAt": "Philadelphia, PA",
          "config:adminEmail": "ksm@pobox.com",
          "config:poweredBy": "Cofax",
          "config:poweredByIcon": "/images/cofax.gif",
          "config:staticPath": "/content/static",
        },
        system_params: {
          creatorName: "Yauheni Bulyha",
          creatorPrefix: "YB",
          mailUser: "mail1",
          systemName: "NewTestSystem",
          creationDate: "2022-08-27",
          systemStarts: "140",
          id: "14",
        },
      },
    ];

    // this._brands = [
    //     // {id: 1, name: '1'},
    //     // {id: 2, name: '2'},
    //     // {id: 3, name: '3'},
    //     // {id: 4, name: '4'},
    //     // {id: 5, name: '5'},
    //     // {id: 6, name: '6'},
    //     // {id: 7, name: '7'},
    //     // {id: 8, name: '8'},
    //     // {id: 9, name: '9'},
    //     // {id: 10, name: '10'},
    //     // {id: 11, name: '11'},
    //     // {id: 12, name: '12'},
    //     // {id: 13, name: '13'},
    //     // {id: 14, name: '14'},
    //     // {id: 15, name: '15'},
    //     // {id: 16, name: '16'},

    // ]

    makeAutoObservable(this);
  }

  setCurrentComponents(component, type) {
    let currentComponents = this._currentComponents;
    type == "clear" && (currentComponents = {})
    currentComponents[type] = component.name;
    this._currentComponents = currentComponents;
  }

  setSystems(devices) {
    this._systems = devices;
  }

  get systems() {
    return this._systems;
  }

  get currentComponents() {
    return this._currentComponents;
  }
}
