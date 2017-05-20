import Favorites from './Favorites'
import { shallow, mount } from 'enzyme'
import MovieCard from '../MovieCard/MovieCard'
import React, { Component } from 'react'


describe('Favorite functionality', () => {

it('should render', () => {
  const wrapper = shallow(
    <Favorites
      movies={[]}
      favorites={[]}
      user={12}/>)

expect(wrapper.length).toEqual(1)
  })

  it("should render text if no favortite movies are found",()=>{

    const wrapper = shallow(
      <Favorites
        movies={[]}
        favorites={[]}
        user={12}/>)
  expect(wrapper.find('.no-favorites-container').text()).toEqual("No favorite movies? Come on...")
  expect(wrapper.children().length).toEqual(1)
  })

  it("should render a list of favorites if any ",()=>{

    const wrapper = shallow(
      <Favorites
        movies={[{id:12},{id:15},{id:17}]}
        favorites={[12,15]}
        user={2}/>)
    expect(wrapper.find('MovieCard').length).toEqual(2)
  })

  it("should have a class name if favorites are available",()=>{

    const wrapper = shallow(
      <Favorites
        movies={[{id:12},{id:15},{id:17}]}
        favorites={[12,15]}
        user={2}/>)
        expect(wrapper.node.props.className).toEqual('favorites-list')
  })

})
