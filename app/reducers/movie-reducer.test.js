import movieReducer from './movie-reducer'

describe('movieReducer test', () => {

  it('it should return state by default', () => {
    expect(movieReducer(undefined, {})).toEqual([])
  })

  it('it should fetch', () => {
    const response = {
      page: 1,
      results: [1, 2, 'hello there']
    }
    const action = {
      payload: response,
      type: 'FETCH_REQUEST'
    }

    expect(movieReducer(undefined, action)).toEqual(response)
    expect(movieReducer([], action)).toEqual(response)
  })
})
