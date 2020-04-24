import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import ItemList from "./components/ItemList";
import {Item} from "./types/Item";
import {connect, DispatchProp} from 'react-redux';
import {axiosCreateItem} from "./actions/axiosCreateItemActions";
import {axiosGetItems} from "./actions/axiosGetItemsActions";

const App: React.FunctionComponent<DispatchProp> = (props) => {

    const [newItemText, setNewItemText] = useState<string>("");

    useEffect(() => {
        console.log("doing main effect");
        subscribeToSocket()
        getItems()
    }, [])

    function subscribeToSocket(){
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

    function createItem(event: any) {
        event.preventDefault();
        const item : Item = {
            groupId: "gid",
            userId: "uid",
            text: newItemText
        }
        axiosCreateItem(item)(props.dispatch)
        setNewItemText("")
    }

    function handleChange(event: any) {
        setNewItemText(event.target.value)
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
            <form onSubmit={createItem}>
                <input type="text" value={newItemText} onChange={handleChange}/>
                <button>
                    submit
                </button>
            </form>
            <button onClick={clearItems}>
                clear items
            </button>
        </div>
    );
}

export default connect()(App);
