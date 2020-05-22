import React, { FC, useEffect, useRef, useState } from 'react'
import ItemList from './ItemList'
import CreateItemForm from './CreateItemForm'
import ClearItemsButton from './ClearItemsButton'
import { Item } from '../types/Item'
import { getItems, subscribeToItems } from '../api/itemApi'

const ItemOverview: FC = () => {
    const [items, setItems] = useState<Item[]>([])

    const itemReceived = (item: Item) => {
        setItems((prevItems) => [...prevItems, item])
    }

    useEffect(() => {
        getItems().then((value) => {
            setItems(value)
        })
        subscribeToItems(itemReceived)
    }, [])

    return (
        <>
            <ItemList items={items} />
            <CreateItemForm />
            <ClearItemsButton />
        </>
    )
}

export default ItemOverview
