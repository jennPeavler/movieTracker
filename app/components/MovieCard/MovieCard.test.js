import React from 'react'
import {shallow,mount} from 'enzyme'
import MovieCard from './MovieCard'




describe('MovieCard', () => {

  const wrapper = shallow(
    <MovieCard
    isFavorite='not-favorite'
    movieInfo={'id:12,title:"Apocalayse Now",overview:"goodmovie",release_date:"1978",vote_average:4'}
    />)


it('should render', () => {

  expect(wrapper.length).toEqual(1)
})

it("should have a class name",()=>{

  expect(wrapper.hasClass('not-favorite')).toEqual(true)
})

it('should have a class name that changes if it has been favorited',() => {

  const wrapper = shallow(
    <MovieCard
    isFavorite='favorite'
    movieInfo={'id:12,title:"Apocalayse Now",overview:"goodmovie",release_date:"1978",vote_average:4'}
    />)
    expect(wrapper.hasClass('favorite')).toEqual(true)
})




})
