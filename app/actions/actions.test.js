
import { addFavorite, removeFavorite, fetchMovieRequest, toggleUser, logOffUser } from './index.js'

describe('actions tests', () => {

  it('should addFavorite', () => {
    const id = 42
    const expectedAction = {
      type: 'ADD_FAVORITE',
      id : 42
    }
    expect(addFavorite(id)).toEqual(expectedAction)
  })

  it('should removeFavorite', () => {
    const id = 42
    const expectedAction = {
      type: 'REMOVE_FAVORITE',
      id : 42
    }
    expect(removeFavorite(id)).toEqual(expectedAction)
  })

  it('should toggleUser', () => {
    const id = 42
    const expectedAction = {
      type: 'USER_TOGGLE',
      id : 42
    }
    expect(toggleUser(id)).toEqual(expectedAction)
  })

  it('should logOffUser', () => {
    const id = 42
    const expectedAction = {
      type: 'USER_LOGOUT',
      id : 42
    }
    expect(logOffUser(id)).toEqual(expectedAction)
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
