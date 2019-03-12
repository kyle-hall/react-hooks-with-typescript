import React from 'react'
import { shallow } from 'enzyme'

import HookCounter from './HookCounter'

describe('HookCounter', () => {
  it('should have a number display that defaults to zero', () => {
    const wrapper = shallow(<HookCounter />)

    const counterText = wrapper
      .find('p')
      .first()
      .text()

    expect(counterText).toEqual('0')
  })

  it('should have a button for updating the counter', () => {
    const wrapper = shallow(<HookCounter />)

    expect(wrapper.find('button').length).toBe(1)
    expect(wrapper.find('button').text()).toBe('+')
  })

  it('should increment the counter on click', () => {
    const wrapper = shallow(<HookCounter />)

    wrapper.find('button').simulate('click')

    expect(
      wrapper
        .find('p')
        .first()
        .text()
    ).toEqual('1')
  })
})
