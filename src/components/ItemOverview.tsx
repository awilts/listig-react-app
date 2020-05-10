import React, { FC, useEffect } from 'react'
import ItemList from './ItemList'
import CreateItemForm from './CreateItemForm'
import ClearItemsButton from './ClearItemsButton'
import { useDispatch } from 'react-redux'
import { subscribeToItems } from '../actions/webSocketActions'
import { axiosGetItems } from '../actions/axiosGetItemsActions'

const ItemOverview: FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        subscribeToItems()(dispatch)
        axiosGetItems()(dispatch)
    }, [dispatch])

    return (
        <>
            <ItemList />
            <CreateItemForm />
            <ClearItemsButton />
        </>
    )
}

export default ItemOverview
