import React, { useEffect } from 'react'
import './App.css'
import ItemList from './components/ItemList'
import { connect, DispatchProp, useDispatch } from 'react-redux'
import { axiosGetItems } from './actions/axiosGetItemsActions'
import CreateItemForm from './components/CreateItemForm'
import { subscribeToItems } from './actions/webSocketActions'
import ClearItemsButton from './components/ClearItemsButton'

const App: React.FC<DispatchProp> = (props) => {
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

export default connect()(App)
export { App }
