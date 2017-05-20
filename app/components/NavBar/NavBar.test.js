import React from 'react'
import {shallow,mount} from 'enzyme'
import {NavBar} from './NavBar'


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
