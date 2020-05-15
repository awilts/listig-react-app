import { Item } from '../types/Item'
import { unionWith } from 'lodash'
import { ReceivedItem } from '../sagas/subcribeToItems'
import {
    CreateItemsSuccessAction,
    GetItemsSuccessAction,
} from '../actions/actionTypes'

export interface ItemState {
    items: Item[]
}

export const initialState: ItemState = {
    items: [],
}

const sameMessageId = (itemA: Item, itemB: Item) =>
    itemA.messageId === itemB.messageId

type ItemType = GetItemsSuccessAction | CreateItemsSuccessAction | ReceivedItem

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
