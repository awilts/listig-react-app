import React, { FC, useEffect } from 'react'
import ItemList from './ItemList'
import CreateItemForm from './CreateItemForm'
import ClearItemsButton from './ClearItemsButton'
import { useDispatch } from 'react-redux'
import { SUBSCRIBE_ITEMS_ACTION } from '../sagas/subcribeToItems'
import { getItemsAction } from '../actions/actions'

const ItemOverview: FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getItemsAction())
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
