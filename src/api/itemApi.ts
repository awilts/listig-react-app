import axios from 'axios'
import { Item } from '../types/Item'

export const getItems = async (): Promise<Item[]> => {
    const myUrl = window.location.href
    const postUrl = `${myUrl}backend/items`
    const result = await axios.get(postUrl)
    return result.data
}

let ws: WebSocket

export const subscribeToItems = (callback: (item: Item) => void) => {
    const myHostname = window.location.hostname
    ws = new WebSocket(`ws://${myHostname}:8080/ws/items`)
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
