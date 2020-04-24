import axios from 'axios';
import {Dispatch} from "redux";
import {Item} from "../types/Item";

export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS'
export const GET_ITEMS_STARTED = 'GET_ITEMS_STARTED'
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE'

export interface GET_ITEMS_SUCCESS {
    type: string,
    payload: Item[]
}

const myUrl = window.location.href;
const postUrl = `${myUrl}backend/items`

export const axiosGetItems = () => {
    return (dispatch: Dispatch) => {
        dispatch(getItemsStarted());
        axios
            .get(postUrl)
            .then(res => dispatch(getItemsSuccess(res.data)))
            .catch(err => dispatch(getItemsFailure(err.message)));
    };
};

const getItemsStarted = () => ({
    type: GET_ITEMS_STARTED
});

const getItemsSuccess = (items: Item[]): GET_ITEMS_SUCCESS => ({
    type: GET_ITEMS_SUCCESS,
    payload: items
});

const getItemsFailure = (error: any) => ({
    type: GET_ITEMS_FAILURE,
    payload: error
});