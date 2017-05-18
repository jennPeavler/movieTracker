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


// ,applyMiddleware(promiseMiddleware)

// describe.only('App component Rendering', () => {
//   it.only('renders without crashing', () => {
//     const store = createStore(rootReducer)
//     const div = document.createElement('div')
//     ReactDOM.render(<Provider store={store}><App /></Provider>, div)
//     console.log('im in app testing 🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈')
//   })
// })

describe('App component fetch recent movies from moviedb api', () => {


  const fakeStore = configureMockStore({})

  // afterEach(() => {
  //   expect(fetchMock.calls().unmatched).toEqual([])
  //   fetchMock.restore()
  // })

  it('should return error message if it does not fetch the movies from the movie api', () => {

    fetchMock.get('https://api.themoviedb.org/3/movie/now_playing?api_key=4cdebcbe2bc4761f0c631321a04c6465&language=en-US&page=1' , {
        status: 500,
    })

    const wrapper = shallow(<Provider store={fakeStore}><App /></Provider>)
    const app = new App()
    app.componentDidMount()

    function timeOut () {
      setTimeout(console.log('in timeout'),5000)
    }

    timeOut()





    console.log(fakeStore().getState())


    // expect(wrapper.unrendered.props.store.getState()).toEqual({});




  })

})
