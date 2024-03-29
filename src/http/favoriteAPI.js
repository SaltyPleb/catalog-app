import {$authHost, $host} from './index'
import jwt_decode from 'jwt-decode'

export const insertFavorite = async(item) => {
    const {data} = await $host.post('api/favorite', item)
    return data
}

export const fetchFavorite = async() => {
    const {data} = await $host.get('api/favorite')
    return data
}

export const fetchFavoriteById = async(id) => {
    const {data} = await $host.get('api/favorite/' + id)
    return data
}

// export const createBrand = async(brand) => {
//     const {data} = await $authHost.post('api/brand', brand)
//     return data
// }

// export const fetchBrands = async() => {
//     const {data} = await $host.get('api/brand')
//     return data
// }

// export const createDevice = async(device) => {
//     const {data} = await $authHost.post('api/device', device)
//     return data
// }

// export const fetchDevices = async() => {
//     const {data} = await $host.get('api/device')
//     return data
// }

// export const fetchOneDevices = async(id) => {
//     const {data} = await $host.get('api/device/' + id)
//     return data
// }

// export const fetchOneType = async(id) => {
//     const {data} = await $host.get('api/type/' + id)
//     return data
// }