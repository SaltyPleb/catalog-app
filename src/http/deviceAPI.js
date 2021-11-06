import {$authHost, $host} from './index'
import jwt_decode from 'jwt-decode'

export const createType = async(type) => {
    const {data} = await $host.post('api/type', type)
    return data
}

export const fetchTypes = async() => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async(brand) => {
    const {data} = await $host.post('api/brand', brand)
    return data
}

export const fetchBrands = async() => {
    const {data} = await $host.get('api/brand')
    return data
}

export const check = async() => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}