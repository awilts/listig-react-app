import React from 'react'
import { App } from './App'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

test('renders App', () => {
    const wrapper = shallow(<App dispatch={jest.fn} />)

    expect(wrapper.length).toBe(1)
})
