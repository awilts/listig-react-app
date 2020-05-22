import axios from 'axios'
import { Item } from '../types/Item'

const myUrl = window.location.href
const itemUrl = `${myUrl}backend/items`

export const getItems = async (): Promise<Item[]> => {
    const result = await axios.get(itemUrl)
    return result.data
}

export const createItem = async (item: Item): Promise<Item[]> => {
    const result = await axios.post(itemUrl, item)
    return result.data
}

export const subscribeToItems = (callback: (item: Item) => void) => {
    const myHostname = window.location.hostname
    const ws = new WebSocket(`ws://${myHostname}:8080/ws/items`)
    ws.onclose = function (event) {
        console.log(event)
        throw new Error('closed')
    }
    ws.onopen = function (event) {
        console.log(event)
    }
    ws.onerror = function (event) {
        console.log(event)
        throw new Error('error')
    }
    ws.onmessage = function (event) {
        const item: Item = JSON.parse(event.data)
        callback(item)
    }
}
