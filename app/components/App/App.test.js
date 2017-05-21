import React from 'react'
import ReactDOM from 'react-dom'
import fetchMock from 'fetch-mock'
import { mount, shallow } from 'enzyme'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import configureMockStore from 'redux-mock-store'

import movieData from '../MovieList/movieData'
import rootReducer from '../../reducers'
import AppContainer from './AppContainer'
import NavBar from '../NavBar/NavBar'
import App from './App'

describe('App component fetch recent movies from moviedb api', () => {

  const storageMock = () => {
    let storage = {}
     return {
       user: 'bob',
       clear: function() {
         return this.user = ''
       },
       getItem: function(key) {
         return key in storage ? storage[key] : null;
       },
     }
   }
  it.skip('should return error message if it does not fetch the movies from the movie api', () => {

    fetchMock.get('https://api.themoviedb.org/3/movie/now_playing?api_key=4cdebcbe2bc4761f0c631321a04c6465&language=en-US&page=1' , {
        status: 500
    })

    const app = new App()

    console.log(app.componentDidMount())  // why does this return undefined instead of 'error in api call'
    // let errorMessage = () => {return app.componentDidMount()}
    // function timeOut () {
    //   setTimeout(console.log('in timeout'),5000)
    // }

    timeOut()
  })

  it.skip('should have movie data if the movie api call is made', () => {
    fetchMock.get('https://api.themoviedb.org/3/movie/now_playing?api_key=4cdebcbe2bc4761f0c631321a04c6465&language=en-US&page=1' , {
        status: 200,
        ok: true,
        body: movieData
    })
    // const fakeStore = configureMockStore({})
    // const wrapper = shallow(<Provider store={fakeStore}><App /></Provider>)
    const app = new App()
    app.componentDidMount()

  })

  it('should be able to render', () => {
    const fakeStore = configureMockStore({})
    const wrapper = shallow(<Provider store={fakeStore}><App /></Provider>)
  })

  it('should have a switch with 6 routes', () => {

    window.localStorage = storageMock()
    const wrapper = shallow(<App />)
    const switchElement = wrapper.find('Switch')
    const routes = wrapper.find('Route')
    console.log(wrapper.debug())

    expect(switchElement.length).toEqual(1)
    expect(routes.length).toEqual(6)
  })

  it('should have a title of movie watcher', () => {

    window.localStorage = storageMock()
    const wrapper = shallow(<App />)
    const title = wrapper.find('h1')

    expect(title.length).toEqual(1)
    expect(title.text()).toEqual('Movie Tracker')
  })

  it('should have a NavBar', () => {

    window.localStorage = storageMock()
    const wrapper = shallow(<App />)
    const NavB = wrapper.find('Connect')

    expect(NavB.length).toEqual(1)
  })
})
