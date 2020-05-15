import { generateItem } from '../test/utils/generators'
import { testSaga } from 'redux-saga-test-plan'
import axios from 'axios'
import {
    getItemsFailureAction,
    getItemsStartedAction,
    getItemsSuccessAction,
} from '../actions/actions'
import getItemsSaga from './getItemsSaga'
const myUrl = window.location.href
const getUrl = `${myUrl}backend/items`

describe('getItemsSaga', () => {
    it('should get an item via axios', () => {
        const item = generateItem()
        testSaga(getItemsSaga)
            .next()
            .put(getItemsStartedAction())
            .next()
            .call(axios.get, getUrl)
            .next({ data: [item] })
            .put(getItemsSuccessAction([item]))
            .next()
            .isDone()
    })

    it('should throw an error-action if get fails', () => {
        testSaga(getItemsSaga)
            .next()
            .put(getItemsStartedAction())
            .next()
            .call(axios.get, getUrl)
            .throw(new Error('Error'))
            .put(getItemsFailureAction('Error'))
            .next()
            .isDone()
    })
})
