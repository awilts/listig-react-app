import { Item } from '../types/Item'

export const CREATE_ITEM_ACTION = (payload: Item) => {
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
