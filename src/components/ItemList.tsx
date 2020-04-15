import React from "react";

function ItemList(props: { items: string[] }) {
    const items = props.items;
    const listItems = items.map((item) =>
        <li key={item}>      {item}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

export default ItemList;