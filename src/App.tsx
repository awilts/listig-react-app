import React, { useEffect, useRef } from 'react'
import './App.css'
import ItemList from './components/ItemList'
import { connect, DispatchProp } from 'react-redux'
import { axiosGetItems } from './actions/axiosGetItemsActions'
import CreateItemForm from './components/CreateItemForm'
import { subscribeToItems } from './actions/webSocketActions'
import ClearItemsButton from './components/ClearItemsButton'

const App: React.FC<DispatchProp> = (props) => {
    const dispatch = useRef(props.dispatch)
    useEffect(() => {
        subscribeToItems()(dispatch.current)
        axiosGetItems()(dispatch.current)
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
