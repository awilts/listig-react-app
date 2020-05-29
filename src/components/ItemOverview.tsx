import React, { FC } from 'react'
import ItemList from './ItemList'
import CreateItemForm from './CreateItemForm'
import ClearItemsButton from './ClearItemsButton'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

const ItemOverview: FC = () => {
    useFirestoreConnect('items')
    // @ts-ignore
    const items = useSelector((state) => state.firestore.ordered.items)

    return (
        <>
            <ItemList items={items} />
            <CreateItemForm />
            <ClearItemsButton />
        </>
    )
}

export default ItemOverview
