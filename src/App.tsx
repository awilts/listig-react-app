import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import ItemList from "./components/ItemList";


function App() {

    const [items, setItems] = useState(["a", "b", "c"]);
    const [newItem, setNewItem] = useState("");

    useEffect(() => {
        const myUrl = window.location.href;
        const queryUrl = `${myUrl}backend/message`
        axios.get(queryUrl)
            .then(data => console.log(data))
            .catch(err => console.log(err));
    })

    function addItem(foo: any) {
        foo.preventDefault();
        setItems([...items, newItem]);
        setNewItem("");
    }

    function handleChange(event: any) {
        setNewItem(event.target.value)
    }

    return (
        <div>
            <ItemList items={items}/>
            <form onSubmit={addItem}>
                <input type="text" value={newItem} onChange={handleChange} />
                <button>
                    submit
                </button>
            </form>
        </div>
    );
}

export default App;
