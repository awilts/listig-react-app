import React from 'react'
import { Item } from '../types/Item'
import { ItemState } from '../store/root-reducer'
import { connect } from 'react-redux'

interface Props {
    items: Item[]
}

const ItemList: React.FC<Props> = (props) => {
    const listItems = props.items.map((item) => (
        <li key={item.messageId}>{item.text}</li>
    ))
    return <ul>{listItems}</ul>
}

const mapStateToProps = (state: ItemState) => ({
    items: state.items,
})

export default connect(mapStateToProps)(ItemList)
export { ItemList }
