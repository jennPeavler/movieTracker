import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';
import App from './App';
import fetchMock from 'fetch-mock'
import { mount, shallow } from 'enzyme'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../../reducers'
import configureMockStore from 'redux-mock-store'
import movieData from '../MovieList/movieData'

describe('App component fetch recent movies from moviedb api', () => {

  it('should return error message if it does not fetch the movies from the movie api', () => {

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

  it('should have movie data if the movie api call is made', () => {
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

  it.only('should be able to mount', () => {
    const fakeStore = configureMockStore({})
    const wrapper = shallow(<Provider store={fakeStore}><App /></Provider>)
    console.log(wrapper.unrendered.props);
  })
})
