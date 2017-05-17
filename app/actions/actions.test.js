import { toggleMovie, fetchMovieRequest } from './index.js'

describe('actions tests', () => {

  it('should return a toggle a favorite', () => {
    const id = 42
    const expectedAction = {
      type: 'TOGGLE_FAVORITE',
      id : 42
    }
    expect(toggleMovie(id)).toEqual(expectedAction)
  })

  it('should return a payload', () => {
    const response = {
      page: 1,
      results: [1, 2, 'hello there']
    }
    const expectedAction = {
      type: 'FETCH_REQUEST',
      payload: response
    }
    expect(fetchMovieRequest(response)).toEqual(expectedAction)
  })
})

