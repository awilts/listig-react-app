import React, {useState} from "react";
import {Item} from "../types/Item";
import {connect, DispatchProp} from "react-redux";
import {axiosCreateItem} from "../actions/axiosCreateItemActions";

const CreateItemForm: React.FunctionComponent<DispatchProp> = (props) => {

    const [newItemText, setNewItemText] = useState<string>("");

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

    return (
        <form onSubmit={createItem}>
            <input type="text" value={newItemText} onChange={event => setNewItemText(event.target.value)}/>
            <button>
                submit
            </button>
        </form>
    );
}

export default connect()(CreateItemForm);