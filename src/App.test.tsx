import React from 'react'
import App from './App'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// import { useSelector, useDispatch, connect } from 'react-redux'

const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch,
}))

Enzyme.configure({ adapter: new Adapter() })

test('renders App', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.length).toBe(1)
})
