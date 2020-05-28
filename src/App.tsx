import React, { FC } from 'react'
import './App.css'
import Authentication from './components/Authentication'
import ItemOverview from './components/ItemOverview'

const App: FC = () => {
    return (
        <div>
            <Authentication>
                <ItemOverview />
            </Authentication>
        </div>
    )
}

export default App
