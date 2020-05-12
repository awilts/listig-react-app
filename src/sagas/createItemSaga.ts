import axios from 'axios'
import { Item } from '../types/Item'
import { call, put, takeEvery } from 'redux-saga/effects'

export type CREATE_ITEM_TYPE = {
    type: 'CREATE_ITEM'
    payload: Item
}

export type CREATE_ITEM_SUCCESS_TYPE = {
    type: 'CREATE_ITEM_SUCCESS'
    payload: Item[]
}
const CREATE_ITEM_STARTED = { type: 'CREATE_ITEM_STARTED' }
export const CREATE_ITEM_ACTION = (payload: Item) => {
    return {
        type: 'CREATE_ITEM',
        payload: payload,
    }
}

const myUrl = window.location.href
const postUrl = `${myUrl}backend/items`

function* createItem(action: CREATE_ITEM_TYPE) {
    yield put(CREATE_ITEM_STARTED)
    try {
        const result = yield call(axios.post, postUrl, action.payload)
        yield put(CREATE_ITEM_SUCCESS(result.data))
    } catch (err) {
        yield put(CREATE_ITEM_FAILURE(err.message))
    }
}

export const CREATE_ITEM_SUCCESS = (item: Item): CREATE_ITEM_SUCCESS_TYPE => ({
    type: 'CREATE_ITEM_SUCCESS',
    payload: [item],
})

const CREATE_ITEM_FAILURE = (error: any) => ({
    type: 'CREATE_ITEM_FAILURE',
    payload: {
        error,
    },
})

function* createItemSaga() {
    // @ts-ignore
    yield takeEvery('CREATE_ITEM', createItem)
}

export default createItemSaga
