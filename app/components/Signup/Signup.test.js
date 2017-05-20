import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import fetchMock from 'fetch-mock'
import { browserHistory } from 'react-router'
import { shallow, mount } from 'enzyme'

import Signup from './Signup'

describe('Signup functionality', () => {

  const newUserResponse = {
    data: {
      email: "tman2272@aol.com",
      id: 1,
      name: "taylor",
      password : "password"
    }
  }

  const mockCalls = () => {
    fetchMock.get('http://localhost:5000/api/users', {
      status: 200,
      ok: true,
      body: newUserResponse
    })
    fetchMock.get('*', {
      status: 200,
      ok: true,
      body: newUserResponse
    })
  }

  it('should have default state', () => {
    const wrapper = mount(<Signup />)

    expect(wrapper.state('name')).toEqual("")
    expect(wrapper.state('email')).toEqual("")
    expect(wrapper.state('password')).toEqual("")
    expect(wrapper.state('retypedPassword')).toEqual("")
  })

  it('should add new users to state', () => {
    mockCalls()
    const wrapper = mount(<Signup />)

    const btn = wrapper.find('button')
    const email = wrapper.find('.signup-email')
    const password = wrapper.find('.signup-password')
    const retype = wrapper.find('.signup-retypedPassword')

    email.simulate('change', { target: { value: 'email@email.com'}})
    password.simulate('change', { target: { value: 'password'}})
    retype.simulate('change', { target: { value: 'password'}})

    btn.simulate('click')

    expect(wrapper.state('email')).toEqual('email@email.com')
    expect(wrapper.state('password')).toEqual('password')
    expect(wrapper.state('retypedPassword')).toEqual('password')
  })
})
