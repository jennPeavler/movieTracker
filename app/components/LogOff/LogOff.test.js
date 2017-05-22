import React, { Component } from 'react'
import { shallow, mount } from 'enzyme'
import fetchMock from 'fetch-mock'
import createHistory from 'history/createBrowserHistory'

import LogOff from './LogOff'

describe('log off functionality', () => {
  it('should mount two buttons', () => {
    const wrapper = mount(< LogOff/>)
    const buttons = wrapper.find('button')
    expect(buttons.length).toBe(2)
  })

  it('should log off if user selects yes to logging off', () => {
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

     window.localStorage = storageMock();
     const logoffBtn = wrapper.find('.yes')

     expect(window.localStorage.user).toBe('bob')
     logoffBtn.simulate('click')
     expect(window.localStorage.user).toBe('');
  })

  it('should not log off if user selects no to logging off', () => {
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
     window.localStorage = storageMock();
     const logoffBtn = wrapper.find('.no')

     expect(window.localStorage.user).toBe('bob')
     logoffBtn.simulate('click')
     expect(window.localStorage.user).toBe('bob')
  })

  it('should route to home if user selects no to logging off', () => {
    const mockFn = jest.fn()
    let history = {
      url: 'http://localhost:5000/logoff',
      replace: function(url) {
        return this.url = url
      }
    }
    const wrapper = mount(<LogOff handleUser={mockFn}
                                  history={history}
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
     const logoffBtn = wrapper.find('.no')

     expect(wrapper.props().history.url).toEqual('http://localhost:5000/logoff')
     logoffBtn.simulate('click')
     expect(wrapper.props().history.url).toEqual('/')
  })

  it('should route to home if user selects yes to logging off', () => {
    const mockFn = jest.fn()
    let history = {
      url: 'http://localhost:5000/logoff',
      replace: function(url) {
        return this.url=url
      }
    }
    const wrapper = mount(<LogOff handleUser={mockFn}
                                  history={history}
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
     const logoffBtn = wrapper.find('.no')

     expect(wrapper.props().history.url).toEqual('http://localhost:5000/logoff')
     logoffBtn.simulate('click')
     expect(wrapper.props().history.url).toEqual('/')
   })
})
