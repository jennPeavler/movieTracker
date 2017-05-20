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


})
