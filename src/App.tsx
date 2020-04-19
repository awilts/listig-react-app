import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import ItemList from "./components/ItemList";


function App() {

    const [items, setItems] = useState(["a", "b", "c"]);
    const [newItem, setNewItem] = useState("");

    useEffect(() => {
        const myHostname = window.location.hostname;


        // console.log({myHostname});
        // const socket = new WebSocket(`ws://${myHostname}:3000/ws/items`);
        const socket = new WebSocket(`ws://localhost:8080/ws/items`);
        socket.addEventListener('message', async (event: any) => {
            const profile = JSON.parse(event.data);
            console.log("got something via WS");
            console.log(profile);
        });


        // const queryUrl = `${myUrl}backend/items`
        // axios.get(queryUrl)
        //     .then(data => console.log(data))
        //     .catch(err => console.log(err));
    })

    function addItem(foo: any) {
        foo.preventDefault();
        setItems([...items, newItem]);

        const myUrl = window.location.href;
        const postUrl = `${myUrl}backend/items`
        const newItemObj = {
            userId: "myUserId",
            groupId: "myGroupId",
            text: newItem
        }
        axios.post(postUrl, newItemObj)
            .then(data => {
                    console.log("sent something..")
                    console.log(data)
                }
            )
            .catch(err => console.log(err));
        setNewItem("");
    }

    function handleChange(event: any) {
        setNewItem(event.target.value)
    }

    return (
        <div>
            <ItemList items={items}/>
            <form onSubmit={addItem}>
                <input type="text" value={newItem} onChange={handleChange}/>
                <button>
                    submit
                </button>
            </form>
        </div>
    );
}

export default App;
