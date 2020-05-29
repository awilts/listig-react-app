import React from 'react'
import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ItemOverview from './ItemOverview'
import { generateItem } from '../test/utils/generators'
import { mocked } from 'ts-jest/utils'

// jest.mock('../api/itemApi')
// const mockedGetItems = mocked(getItems)

afterEach(() => {
    jest.resetAllMocks()
})

test('ItemOverview receives 1 item from backend', async () => {
    // mockedGetItems.mockResolvedValueOnce([generateItem()])
    //
    // const itemOverview = render(<ItemOverview />)
    //
    // expect(getItems).toHaveBeenCalledTimes(1)
    // await waitFor(() =>
    //     expect(itemOverview.queryAllByRole('listitem')).toHaveLength(1)
    // )
})

test('ItemOverview receives 0 items from backend', async () => {
    // mockedGetItems.mockResolvedValueOnce([])
    //
    // const itemOverview = render(<ItemOverview />)
    //
    // expect(getItems).toHaveBeenCalledTimes(1)
    // await waitFor(() =>
    //     expect(itemOverview.queryAllByRole('listitem')).toHaveLength(0)
    // )
})
