import axios from 'axios';
import {Dispatch} from "redux";
import {Item} from "../types/Item";

export const CREATE_ITEM_SUCCESS = 'CREATE_ITEM_SUCCESS'
export const CREATE_ITEM_STARTED = 'CREATE_ITEM_STARTED'
export const CREATE_ITEM_FAILURE = 'CREATE_ITEM_FAILURE'

export interface CREATE_ITEM_SUCCESS {
    type: string,
    payload: Item
}

const myUrl = window.location.href;
const postUrl = `${myUrl}backend/items`

export const axiosCreateItem = (item: Item) => {
    return (dispatch: Dispatch) => {
        dispatch(createItemStarted());
        axios
            .post(postUrl, item)
            .then(res => dispatch(createItemSuccess(res.data)))
            .catch(err => dispatch(createItemFailure(err.message)));
    };
};

const createItemSuccess = (item: Item) : CREATE_ITEM_SUCCESS => ({
    type: CREATE_ITEM_SUCCESS,
    payload: {
        ...item
    }
});

const createItemStarted = () => ({
    type: CREATE_ITEM_STARTED
});

const createItemFailure = (error: any) => ({
    type: CREATE_ITEM_FAILURE,
    payload: {
        error
    }
});