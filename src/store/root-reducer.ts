import {Item} from "../types/Item";
import {CREATE_ITEM_SUCCESS} from '../actions/axiosCreateItemActions'
import {GET_ITEMS_SUCCESS} from '../actions/axiosGetItemsActions'
import {RECEIVED_ITEM} from '../actions/webSocketActions'

export interface State {
    items: Item[]
}

const initialState: State = {
    items: []
}

type itemActionTypes = CREATE_ITEM_SUCCESS | GET_ITEMS_SUCCESS | RECEIVED_ITEM

function itemApp(state: State = initialState, action: itemActionTypes): State {
    switch (action.type) {
        case CREATE_ITEM_SUCCESS:
            return Object.assign({}, state,
                {items: [...state.items, action.payload]}
            )
        case GET_ITEMS_SUCCESS:
            return Object.assign({}, state,
                {items: action.payload}
            )
        case RECEIVED_ITEM:
            return Object.assign({}, state,
                {items: [...state.items, action.payload]}
            )
    }
    return state
}

export default itemApp