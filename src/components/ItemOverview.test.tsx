import React from 'react'
import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ItemOverview from './ItemOverview'
import { getItems } from '../api/itemApi'
import { generateItem } from '../test/utils/generators'

jest.mock('../api/itemApi')

afterEach(() => {
    jest.resetAllMocks()
})

test('ItemOverview receives 1 item from backend', async () => {
    const testItem = generateItem()
    // @ts-ignore
    getItems.mockResolvedValueOnce([testItem])

    const itemOverview = render(<ItemOverview />)
    expect(getItems).toHaveBeenCalledTimes(1)

    // @ts-ignore
    await waitFor(() =>
        expect(itemOverview.queryAllByRole('listitem')).toHaveLength(1)
    )
})

test('ItemOverview receives 0 items from backend', async () => {
    // @ts-ignore
    getItems.mockResolvedValueOnce([])

    const itemOverview = render(<ItemOverview />)
    expect(getItems).toHaveBeenCalledTimes(1)

    await waitFor(() =>
        expect(itemOverview.queryAllByRole('listitem')).toHaveLength(0)
    )
})
