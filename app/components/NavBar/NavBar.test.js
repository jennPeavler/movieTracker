import React, { Component } from 'react'
import { shallow, mount } from 'enzyme'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'

import { NavBar } from './NavBar'


describe('NavBar ', () => {


  const wrapper = shallow(
    <NavBar
    name={'name:"CHARLIE"'}
    userName={'name:"CHARLES"'}/>)

it('should render', () => {

  expect(wrapper.length).toEqual(1)
})

it.only("should render diffrent NavLinks with the user being logged in",()=>{

  const wrapper = shallow(
    <NavBar
    name={'name:"CHARLIE"'}
    userName={'name:"CHARLES"'}/>)

console.log(wrapper.props())
  expect(wrapper.find('NavLink').length).toEqual(3)

  // expect(wrapper.find('.nav-link').first().node.props.children).toEqual(' Home ')
  //
  // expect(wrapper.find('.center').node.props.children).toEqual(" Favorites ")
  //
  // expect(wrapper.find('.nav-link').last().node.props.children).toEqual(" Logoff ")


describe('NavBar functionality', () => {

  it('should have 3 links', () => {
    const wrapper = shallow(<NavBar name={{id: 3}} userName={{name: 'test'}} />)
    const navLink = wrapper.find('NavLink')

    expect(navLink.length).toEqual(3)
  })

  it('should have the correct links when logged in', () => {
    const wrapper = shallow(<NavBar name={{id: 3}} userName={{name: 'test'}} />)
    const first = wrapper.find('NavLink').first()
    const last = wrapper.find('NavLink').last()

    expect(first.props().to).toEqual('/')
    expect(first.props().children).toEqual(' Home ')
    expect(last.props().to).toEqual('/logoff')
    expect(last.props().children).toEqual([" Logoff (", "test", ") "])
  })

  it('should have the correct links when not logged in', () => {
    const wrapper = shallow(<NavBar name={{}} userName={{}} />)
    const first = wrapper.find('NavLink').first()
    const last = wrapper.find('NavLink').last()

    expect(first.props().to).toEqual('/')
    expect(first.props().children).toEqual(' Home ')
    expect(last.props().to).toEqual('/login')
    expect(last.props().children).toEqual(" Login ")
  })

it("should render diffrent NavLinks with the user being logged off",()=>{

const wrapper = shallow(
  <NavBar
  name={'name:""'}
  userName = {'name:""'}
/>)
expect(wrapper.find('NavLink').length).toEqual(3)

expect(wrapper.find('.nav-link').first().node.props.children).toEqual(' Home ')

expect(wrapper.find('.center').node.props.children).toEqual(" Signup ")

expect(wrapper.find('.nav-link').last().node.props.children).toEqual(" Login ")

})



})
