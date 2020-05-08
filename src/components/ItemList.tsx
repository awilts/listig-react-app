import React, { FC } from 'react'
import { ItemState } from '../store/root-reducer'
import { useSelector } from 'react-redux'

export const ItemList: FC = () => {
    const items = useSelector((state: ItemState) => state.items)

    const listItems = items.map((item) => (
        <li key={item.messageId}>{item.text}</li>
    ))
    return <ul>{listItems}</ul>
}
