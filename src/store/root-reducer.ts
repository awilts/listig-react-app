import { Item } from '../types/Item'
import { unionWith } from 'lodash'
import {
    CreateItemsSuccessAction,
    GetItemsSuccessAction,
    ReceivedItemAction,
} from '../actions/actionTypes'

export interface ItemState {
    items: Item[]
}

export const initialState: ItemState = {
    items: [],
}

const sameMessageId = (itemA: Item, itemB: Item) =>
    itemA.messageId === itemB.messageId

type AddItemsAction =
    | GetItemsSuccessAction
    | CreateItemsSuccessAction
    | ReceivedItemAction

const addItemReducer = (state = initialState, action: AddItemsAction): ItemState => {
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
