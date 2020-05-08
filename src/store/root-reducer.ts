import { Item } from '../types/Item'
import { CREATE_ITEM_SUCCESS } from '../actions/axiosCreateItemActions'
import { GET_ITEMS_SUCCESS } from '../actions/axiosGetItemsActions'
import { RECEIVED_ITEM } from '../actions/webSocketActions'
import { unionWith } from 'lodash'

export interface ItemState {
    items: Item[]
}

export const initialState: ItemState = {
    items: [],
}

const sameMessageId = (itemA: Item, itemB: Item) =>
    itemA.messageId === itemB.messageId

type ItemType = GET_ITEMS_SUCCESS | CREATE_ITEM_SUCCESS | RECEIVED_ITEM

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
