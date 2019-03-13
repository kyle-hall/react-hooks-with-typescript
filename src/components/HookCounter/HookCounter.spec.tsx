import React from 'react'
import { shallow } from 'enzyme'
import { render, getByTestId, fireEvent } from 'react-testing-library'

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

  it('should increment the counter', () => {
    const { container } = render(<HookCounter />)

    const increment = getByTestId(container, 'increment')

    fireEvent.click(increment)

    expect(getByTestId(container, 'count-display').textContent).toBe('1')
  })
})
