import { Item } from '../types/Item'
import {
    CreateItemAction,
    CreateItemsSuccessAction,
    GetItemsSuccessAction,
} from './actionTypes'

export const createItemAction = (payload: Item): CreateItemAction => {
    return {
        type: 'CREATE_ITEM',
        payload: payload,
    }
}

export const createItemSuccessAction = (
    item: Item
): CreateItemsSuccessAction => ({
    type: 'CREATE_ITEM_SUCCESS',
    payload: [item],
})

export const createItemFailureAction = (error: any) => ({
    type: 'CREATE_ITEM_FAILURE',
    payload: {
        error,
    },
})
export const createItemStartedAction = () => ({ type: 'CREATE_ITEM_STARTED' })
export const getItemsAction = () => ({
    type: 'GET_ITEMS',
})
export const getItemsStartedAction = () => ({
    type: 'GET_ITEMS_STARTED',
})

export const getItemsSuccessAction = (
    items: Item[]
): GetItemsSuccessAction => ({
    type: 'GET_ITEMS_SUCCESS',
    payload: items,
})
export const getItemsFailureAction = (error: any) => ({
    type: 'GET_ITEMS_FAILURE',
    payload: error,
})
