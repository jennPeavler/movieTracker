import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Login from './Login'
import { shallow, mount } from 'enzyme'

describe('Login functionality', () => {

  it('should have default state', () => {
    const wrapper = mount(<Login />)

    expect(wrapper.state('name')).toEqual("")
    expect(wrapper.state('email')).toEqual("")
    expect(wrapper.state('password')).toEqual("")
    expect(wrapper.state('retypedPassword')).toEqual("")
  })

  it('should add new users to state', () => {
    const wrapper = mount(<Login />)
    wrapper.setState({
      name: 'hello',
      email: 'there',
      password: 'h3ll0',
      retypedPassword: 'h3ll0'
    })
    let btn = wrapper.find('button')
    // btn.simulate('click')

    console.log(wrapper.state())
    console.log()
    // expect(wrapper.state('retypedPassword')).toEqual("")
  })
})
