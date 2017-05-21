import { shallow, mount } from 'enzyme'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'

import MovieCard from '../MovieCard/MovieCard'
import Favorites from './Favorites'
import movieData from '../MovieList/movieData'




describe('favorite functionality', () => {
  
  it('should render', () => {
  const wrapper = shallow(
    <Favorites
      movies={[]}
      favorites={[]}
      user={12}/>)

  expect(wrapper.length).toEqual(1)


it('should render no cards if there are no matching favorites', () => {
  const wrapper = shallow(<Favorites movies={movieData.movies} favorites={[7]}/>)
  const found = wrapper.find('MovieCard')

  expect(found.length).toEqual(0)
})

it('should render no cards if there is nothing in favorites', () => {
  const wrapper = shallow(<Favorites movies={movieData.movies} favorites={[]}/>)
  const found = wrapper.find('MovieCard')

  expect(found.length).toEqual(0)
  })

it('should render one card if there is one matching favorite', () => {
  const wrapper = shallow(<Favorites movies={movieData.movies} favorites={[283995]}/>)
  const found = wrapper.find('MovieCard')

  expect(found.length).toEqual(1)
  })

it('should render two cards if there are two matching favorites', () => {
  const wrapper = mount(<Favorites movies={movieData.movies} favorites={[166426, 283995]}/>)
  const found = wrapper.find('MovieCard')
  const first = wrapper.find('MovieCard').first()

  expect(found.length).toEqual(2)
  expect(first.length).toEqual(1)

  expect(first.props().index).toEqual(283995)
  expect(first.props().movieInfo.backdrop_path).toEqual("/aJn9XeesqsrSLKcHfHP4u5985hn.jpg")
  })

it('should render the correct card data', () => {
  const wrapper = mount(<Favorites movies={movieData.movies} favorites={[166426, 283995]}/>)
  const first = wrapper.find('MovieCard').first()

  expect(first.length).toEqual(1)

  expect(first.props().index).toEqual(283995)
  expect(first.props().movieInfo.backdrop_path).toEqual("/aJn9XeesqsrSLKcHfHP4u5985hn.jpg")
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
