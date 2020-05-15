import { Item } from '../types/Item'
import { GET_ITEMS_SUCCESS_TYPE } from '../sagas/getItemsSaga'

export const createItemAction = (payload: Item) => {
    return {
        type: 'CREATE_ITEM',
        payload: payload,
    }
}

export type ActionWithPayload = {
    type: string
    payload: Item
}

export const CREATE_ITEM_SUCCESS = (item: Item) => ({
    type: 'CREATE_ITEM_SUCCESS',
    payload: [item],
})

export const CREATE_ITEM_FAILURE = (error: any) => ({
    type: 'CREATE_ITEM_FAILURE',
    payload: {
        error,
    },
})
export const CREATE_ITEM_STARTED = () => ({ type: 'CREATE_ITEM_STARTED' })
export const getItemsAction = () => ({
    type: 'GET_ITEMS',
})
export const GET_ITEMS_STARTED = () => ({
    type: 'GET_ITEMS_STARTED',
})
export const GET_ITEMS_SUCCESS = (items: Item[]): GET_ITEMS_SUCCESS_TYPE => ({
    type: 'GET_ITEMS_SUCCESS',
    payload: items,
})
export const GET_ITEMS_FAILURE = (error: any) => ({
    type: 'GET_ITEMS_FAILURE',
    payload: error,
})
export type CREATE_ITEM_SUCCESS_TYPE = {
    type: 'CREATE_ITEM_SUCCESS'
    payload: Item[]
}
