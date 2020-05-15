import { generateItem } from '../test/utils/generators'
import { testSaga } from 'redux-saga-test-plan'
import axios from 'axios'
import getItemsSaga, { getItems } from './getItemsSaga'
import {
    GET_ITEMS_FAILURE,
    GET_ITEMS_STARTED,
    GET_ITEMS_SUCCESS,
} from '../actions/actions'
const myUrl = window.location.href
const getUrl = `${myUrl}backend/items`

describe('getItemsSaga', () => {
    it('should get an item via axios', () => {
        const item = generateItem()
        testSaga(getItems)
            .next()
            .put(GET_ITEMS_STARTED())
            .next()
            .call(axios.get, getUrl)
            .next({ data: [item] })
            .put(GET_ITEMS_SUCCESS([item]))
            .next()
            .isDone()
    })

    it('should throw an error-action if get fails', () => {
        testSaga(getItems)
            .next()
            .put(GET_ITEMS_STARTED())
            .next()
            .call(axios.get, getUrl)
            .throw(new Error('Error'))
            .put(GET_ITEMS_FAILURE('Error'))
            .next()
            .isDone()
    })
})
