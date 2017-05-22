import React from 'react';
import fetchMock from 'fetch-mock'
import { mount, shallow } from 'enzyme'

import movieData from './movieData'
import MovieList from './MovieList'
import NavBar from '../NavBar/NavBar'

describe('MovieList', () => {
  it('should display movies upon pageload', () => {
    const wrapper = mount(<MovieList movies={movieData.movies} favorites={[]}/>)
    const totalMovies = movieData.total_movies

    expect(wrapper.props().movies.length).toEqual(totalMovies)
  })

  it('should render the correct card data', () => {
    const wrapper = mount(<MovieList movies={movieData.movies} favorites={[]}/>)
    const first = wrapper.find('MovieCard').first()

    expect(first.props().index).toEqual(283995)
    expect(first.props().movieInfo.backdrop_path).toEqual("/aJn9XeesqsrSLKcHfHP4u5985hn.jpg")
  })

  it('should render the correct number of cards', () => {
    const wrapper = mount(<MovieList movies={movieData.movies} favorites={[]}/>)
    const totalMovies = movieData.total_movies
    const found = wrapper.find('MovieCard')

    expect(found.length).toEqual(totalMovies)
    expect(found.length).toEqual(20)
  })
})
