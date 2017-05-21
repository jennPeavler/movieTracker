import React, { Component } from 'react'
import { shallow, mount } from 'enzyme'
import fetchMock from 'fetch-mock'
import createHistory from 'history/createBrowserHistory'
import { browserHistory } from 'react-router'

import LogOff from './LogOff'

describe('log off functionality', () => {
  it('log off if user selects yes to logging off', () => {
    const mockFn = jest.fn()
    const wrapper = mount(<LogOff handleUser={mockFn}
                                  history={'http://localhost:5000/logoff'}
                                  handleClearFavorites={mockFn}/>)

    let storageMock = () => {
       return {
         user: 'bob',
         clear: function() {
           return this.user = ''
         },
       }
     }

    window.localStorage = storageMock()
    const logoffBtn = wrapper.find('.yes')
    expect(window.localStorage.user).toBe('bob')
    logoffBtn.simulate('click')
  })
})
