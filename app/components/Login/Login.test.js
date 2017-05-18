import React, { Component } from 'react'
import { shallow, mount } from 'enzyme'

import Login from './Login'

describe('Login functionality', () => {

  it('should have default state', () => {
    const wrapper = mount(<Login />)

    expect(wrapper.state('email')).toEqual("")
    expect(wrapper.state('password')).toEqual("")
  })
})
