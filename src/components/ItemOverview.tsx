import React, { FC, useEffect } from 'react'
import ItemList from './ItemList'
import CreateItemForm from './CreateItemForm'
import ClearItemsButton from './ClearItemsButton'
import { useDispatch } from 'react-redux'
import { getItemsAction, subscribeToItemsAction } from '../actions/actions'

const ItemOverview: FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getItemsAction())
        dispatch(subscribeToItemsAction())
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
