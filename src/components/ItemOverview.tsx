import React, { FC, useEffect } from 'react'
import ItemList from './ItemList'
import CreateItemForm from './CreateItemForm'
import ClearItemsButton from './ClearItemsButton'
import { useDispatch } from 'react-redux'
import { SUBSCRIBE_ITEMS_ACTION } from '../sagas/subcribeToItems'
import { GET_ITEMS_ACTION } from '../actions/actions'

const ItemOverview: FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GET_ITEMS_ACTION())
        dispatch(SUBSCRIBE_ITEMS_ACTION)
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
