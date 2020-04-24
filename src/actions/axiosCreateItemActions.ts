import axios from 'axios';
import {Dispatch} from "redux";
import {Item} from "../types/Item";

export type CREATE_ITEM_SUCCESS = {
    type: 'CREATE_ITEM_SUCCESS',
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

export const createItemSuccess = (item: Item): CREATE_ITEM_SUCCESS => ({
    type: 'CREATE_ITEM_SUCCESS',
    payload: item
});

const createItemStarted = () => ({
    type: 'CREATE_ITEM_STARTED'
});

const createItemFailure = (error: any) => ({
    type: 'CREATE_ITEM_FAILURE',
    payload: {
        error
    }
});