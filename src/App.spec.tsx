import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import App from './App'
import Hello from './components/Hello'
import HookCounter from './components/HookCounter'

describe('App', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should render a Hello component', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find(Hello).length).toBe(1)
  })

  it('should render a hook counter', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find(HookCounter).length).toBe(1)
  })
})
