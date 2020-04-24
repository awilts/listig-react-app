import {Item} from "../types/Item";
import {Dispatch} from "redux";

export const WS_ERROR = 'WS_ERROR'
export const WS_OPEN = 'WS_OPEN'
export const WS_STARTED = 'WS_STARTED'
export const WS_CLOSED = 'WS_CLOSED'

export type RECEIVED_ITEM = {
    type: 'RECEIVED_ITEM',
    payload: Item
}

const createWsStarted = () => ({
    type: WS_STARTED
});

const wsReceivedItem = (item: Item) => ({
    type: 'RECEIVED_ITEM',
    payload: item
});

const wsOpened = () => ({
    type: WS_OPEN
});

const wsError = () => ({
    type: WS_ERROR
});

const wsClosed = () => ({
    type: WS_CLOSED
});

export const subscribeToItems = () => {
    return (dispatch: Dispatch) => {

        dispatch(createWsStarted());
        const myHostname = window.location.hostname;
        const socket = new WebSocket(`ws://${myHostname}:8080/ws/items`);

        socket.onmessage = function(event){
            const item: Item = JSON.parse(event.data);
            dispatch(wsReceivedItem(item));
        }
        socket.onclose = function (event) {
            console.log(event);
            dispatch(wsClosed());
        };
        socket.onopen = function (event) {
            console.log(event);
            dispatch(wsOpened());
        }
        socket.onerror = function (event) {
            console.log(event);
            dispatch(wsError());
        }
    };
};

