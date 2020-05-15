import { expectSaga } from 'redux-saga-test-plan'
import {
    createItemAction,
    getItemsAction,
    subscribeToItemsAction,
} from '../actions/actions'
import rootSaga from './rootSaga'
import getItemsSaga from './getItemsSaga'
import createItemSaga from './createItemSaga'
import axios from 'axios'
import { generateItem } from '../test/utils/generators'
import { subscribeToItems } from './subcribeToItems'

jest.mock('axios')

describe('rootSaga', () => {
    it('should start createItemSaga when receiving CREATE_ITEM action', () => {
        const item = generateItem()
        return expectSaga(rootSaga)
            .fork(createItemSaga, createItemAction(item))
            .dispatch(createItemAction(item))
            .silentRun()
    })

    it('should start getItemsSaga when receiving GET_ITEMS action', () => {
        return expectSaga(rootSaga)
            .fork(getItemsSaga, getItemsAction())
            .dispatch(getItemsAction())
            .silentRun()
    })

    it('should start subscribeToItemsSaga when receiving SUBSCRIBE_ITEMS action', () => {
        return expectSaga(rootSaga)
            .fork(subscribeToItems, subscribeToItemsAction())
            .dispatch(subscribeToItemsAction())
            .silentRun()
    })
})
