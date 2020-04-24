import React from "react";
import {Item} from "../types/Item";
import {State} from "../reducers/reducer";
import {connect} from "react-redux";

function ItemList(props: { items: Item[] }) {
    console.log({props});
    const items = props.items;
    console.log({items});
    const listItems = items.map((item) =>
        <li key={item.messageId}>
            {item.text}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

const mapStateToProps = (state: State) => ({ items: state.items })

export default connect(mapStateToProps)(ItemList);