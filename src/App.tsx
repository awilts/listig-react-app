import React, {useEffect} from 'react';
import axios from 'axios';
import './App.css';
import ItemList from "./components/ItemList";
import {Item} from "./types/Item";
import {connect, DispatchProp} from 'react-redux';
import {axiosGetItems} from "./actions/axiosGetItemsActions";
import CreateItemForm from "./components/CreateItemForm";

const App: React.FunctionComponent<DispatchProp> = (props) => {

    useEffect(() => {
        console.log("doing main effect");
        subscribeToSocket()
        getItems()
    }, [])

    function subscribeToSocket() {
        const myHostname = window.location.hostname;
        const socket = new WebSocket(`ws://${myHostname}:8080/ws/items`);
        socket.addEventListener('message', async (event: any) => {
            console.log("event.data", event.data)
            const item: Item = JSON.parse(event.data);
            console.log("got via ws", item);
            // addItem(item);
        });
        socket.onclose = function (event) {
            console.log("WebSocket is closed.");
            console.log(event);
        };
        socket.onopen = function (event) {
            console.log("WebSocket is open.");
            console.log(event);
        }
        socket.onerror = function (event) {
            console.log("WebSocket is error.");
            console.log(event);
        }
    }

    function getItems() {
        axiosGetItems()(props.dispatch)
    }

    function clearItems() {
        const myUrl = window.location.href;
        const clearUrl = `${myUrl}backend/items/clear`
        axios.post(clearUrl)
            .then(data => {
                    console.log("clearing something..")
                    console.log(data)
                }
            )
            .catch(err => console.log(err));
    }

    return (
        <div>
            <ItemList/>
            <CreateItemForm/>
            <button onClick={clearItems}>
                clear items
            </button>
        </div>
    );
}

export default connect()(App);
