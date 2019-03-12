import React from 'react'
import { shallow } from 'enzyme'

import Hello from './Hello'

describe('Hello', () => {
  it('should render name passed as prop', () => {
    const wrapper = shallow(<Hello name={'Roxanne'} />)

    expect(wrapper.text()).toContain('Hello, Roxanne')
  })

  it('should render default when no name is passed', () => {
    const wrapper = shallow(<Hello />)

    expect(wrapper.text()).toContain('Hello, darling')
  })

  it('should render enthusiasm', () => {
    const wrapper = shallow(<Hello enthusiasm={1} />)

    expect(wrapper.text()).toContain('!')
  })

  it('should default enthusiasm to 1', () => {
    const wrapper = shallow(<Hello />)

    expect(wrapper.text()).toContain('!')
  })
})
