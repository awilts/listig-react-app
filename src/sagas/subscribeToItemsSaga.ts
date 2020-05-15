import { Item } from '../types/Item'
import { eventChannel } from 'redux-saga'
import { call, put, take } from 'redux-saga-test-plan/matchers'
import { receivedItemAction } from '../actions/actions'

export function* subscribeToItems() {
    const socketChannel = yield call(createSocketConnection)
    while (true) {
        try {
            const payload = yield take(socketChannel)
            yield put(receivedItemAction(payload))
        } catch (e) {
            console.log(e)
        }
    }
}

const createSocketConnection = () => {
    const myHostname = window.location.hostname
    const socket = new WebSocket(`ws://${myHostname}:8080/ws/items`)
    return eventChannel((emit) => {
        socket.onmessage = function (event) {
            const item: Item = JSON.parse(event.data)
            emit(item)
        }
        socket.onclose = function (event) {
            console.log(event)
            emit(new Error('closed'))
        }
        socket.onopen = function (event) {
            console.log(event)
        }
        socket.onerror = function (event) {
            console.log(event)
            emit(new Error('an error occured'))
        }
        return () => {
            console.log('unsubscribing')
            socket.close()
        }
    })
}
