import React, { FC, useEffect } from 'react'
import './App.css'
import { ItemList } from './components/ItemList'
import { useDispatch } from 'react-redux'
import { axiosGetItems } from './actions/axiosGetItemsActions'
import { CreateItemForm } from './components/CreateItemForm'
import { subscribeToItems } from './actions/webSocketActions'
import { ClearItemsButton } from './components/ClearItemsButton'

export const App: FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        subscribeToItems()(dispatch)
        axiosGetItems()(dispatch)
    }, [dispatch])

    return (
        <div>
            <ItemList />
            <CreateItemForm />
            <ClearItemsButton />
        </div>
    )
}
