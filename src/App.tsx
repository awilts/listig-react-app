import React, {useEffect, useRef} from 'react';
import axios from 'axios';
import './App.css';
import ItemList from "./components/ItemList";
import {connect, DispatchProp} from 'react-redux';
import {axiosGetItems} from "./actions/axiosGetItemsActions";
import CreateItemForm from "./components/CreateItemForm";
import {subscribeToItems} from "./actions/webSocketActions";

const App: React.FunctionComponent<DispatchProp> = (props) => {

    const dispatch = useRef(props.dispatch)
    useEffect(() => {
        subscribeToItems()(dispatch.current)
        axiosGetItems()(dispatch.current)
    }, [dispatch])

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
