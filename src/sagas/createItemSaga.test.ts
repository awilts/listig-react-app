import createItemSaga, { createItem } from './createItemSaga'
import { generateItem } from '../test/utils/generators'
import { testSaga } from 'redux-saga-test-plan'
import axios from 'axios'
import {
    CREATE_ITEM_ACTION,
    CREATE_ITEM_FAILURE,
    CREATE_ITEM_STARTED,
    CREATE_ITEM_SUCCESS,
} from '../actions/actions'
const myUrl = window.location.href
const postUrl = `${myUrl}backend/items`

describe('createItemSaga', () => {
    it('should post an item via axios', () => {
        const item = generateItem()
        testSaga(createItem, CREATE_ITEM_ACTION(item))
            .next()
            .put(CREATE_ITEM_STARTED())
            .next()
            .call(axios.post, postUrl, item)
            .next({ data: item })
            .put(CREATE_ITEM_SUCCESS(item))
            .next()
            .isDone()
    })

    it('should throw an error-action if post fails', () => {
        const item = generateItem()
        testSaga(createItem, CREATE_ITEM_ACTION(item))
            .next()
            .put(CREATE_ITEM_STARTED())
            .next()
            .call(axios.post, postUrl, item)
            .throw(new Error('Error'))
            .put(CREATE_ITEM_FAILURE('Error'))
            .next()
            .isDone()
    })
})
