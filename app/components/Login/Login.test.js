import React, { Component } from 'react'
import { shallow, mount } from 'enzyme'
import fetchMock from 'fetch-mock'
import { browserHistory } from 'react-router'

import Login from './Login'

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

afterEach( () => {
  expect(fetchMock.calls().unmatched).toEqual([]);
  fetchMock.restore()
})

describe('Login functionality', () => {

  it('should have default state', () => {
    const wrapper = mount(<Login />)

    expect(wrapper.state('email')).toEqual("")
    expect(wrapper.state('password')).toEqual("")
  })

  it('should update state', () => {
    mockCalls()
    const wrapper = mount(<Login />)

    let email = wrapper.find('.email')
    let password = wrapper.find('.password')
    let btn = wrapper.find('button')

    email.simulate('change', { target: { value: 'tman2272@aol.com'}})
    password.simulate('change', { target: { value: 'password'}})

    btn.simulate('click')

    expect(fetchMock.called()).toEqual(true)
    expect(wrapper.state('email')).toEqual('tman2272@aol.com')
    expect(wrapper.state('password')).toEqual('password')
  })
})
