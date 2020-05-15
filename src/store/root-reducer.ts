import { Item } from '../types/Item'
import { unionWith } from 'lodash'
import { RECEIVED_ITEM } from '../sagas/subcribeToItems'
import {
    CREATE_ITEM_SUCCESS_TYPE,
    GET_ITEMS_SUCCESS_TYPE,
} from '../actions/actions'

export interface ItemState {
    items: Item[]
}

export const initialState: ItemState = {
    items: [],
}

const sameMessageId = (itemA: Item, itemB: Item) =>
    itemA.messageId === itemB.messageId

type ItemType =
    | GET_ITEMS_SUCCESS_TYPE
    | CREATE_ITEM_SUCCESS_TYPE
    | RECEIVED_ITEM

const addItemReducer = (state = initialState, action: ItemType): ItemState => {
    switch (action.type) {
        case 'RECEIVED_ITEM':
        case 'CREATE_ITEM_SUCCESS':
        case 'GET_ITEMS_SUCCESS':
            return {
                ...state,
                items: unionWith(state.items, action.payload, sameMessageId),
            }
    }
    return state
}

export default addItemReducer
