import createItemSaga from './createItemSaga'
import { generateItem } from '../test/utils/generators'
import { testSaga } from 'redux-saga-test-plan'
import axios from 'axios'
import {
    createItemFailureAction,
    createItemStartedAction,
    createItemSuccessAction,
    createItemAction,
} from '../actions/actions'
const myUrl = window.location.href
const postUrl = `${myUrl}backend/items`

describe('createItemSaga', () => {
    it('should post an item via axios', () => {
        const item = generateItem()
        testSaga(createItemSaga, createItemAction(item))
            .next()
            .put(createItemStartedAction())
            .next()
            .call(axios.post, postUrl, item)
            .next({ data: item })
            .put(createItemSuccessAction(item))
            .next()
            .isDone()
    })

    it('should throw an error-action if post fails', () => {
        const item = generateItem()
        testSaga(createItemSaga, createItemAction(item))
            .next()
            .put(createItemStartedAction())
            .next()
            .call(axios.post, postUrl, item)
            .throw(new Error('Error'))
            .put(createItemFailureAction('Error'))
            .next()
            .isDone()
    })
})
