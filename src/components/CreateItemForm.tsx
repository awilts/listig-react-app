import React, { FC, useState } from 'react'
import { Item } from '../types/Item'
import { useDispatch } from 'react-redux'
import { createItemAction } from '../actions/actions'

const CreateItemForm: FC = () => {
    const [newItemText, setNewItemText] = useState<string>('')
    let dispatch = useDispatch()

    function createItem(event: any) {
        event.preventDefault()
        const item: Item = {
            groupId: 'gid',
            userId: 'uid',
            text: newItemText,
        }
        dispatch(createItemAction(item))
        setNewItemText('')
    }

    return (
        <form onSubmit={createItem}>
            <input
                type="text"
                value={newItemText}
                onChange={(event) => setNewItemText(event.target.value)}
            />
            <button>submit</button>
        </form>
    )
}

export default CreateItemForm
