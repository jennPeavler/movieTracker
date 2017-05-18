import favoritesReducer from './favorites-reducer'

describe('favoritesReducer test', () => {

  it('it should return state by default', () => {
    expect(favoritesReducer(undefined, {})).toEqual([])
  })

  it('it should add a favorite', () => {
    const id = [42]
    const action = {
      id: 42,
      type: 'ADD_FAVORITE'
    }

    expect(favoritesReducer(undefined, action)).toEqual(id)
    expect(favoritesReducer([], action)).toEqual(id)
  })

  it('it should remove a favorite', () => {
    const id = [283995]
    const stateOne = [126889, 283995, 337339]
    const action = {
      id: 283995,
      type: 'REMOVE_FAVORITE'
    }

    const expectedState = [126889, 337339]

    expect(favoritesReducer(stateOne, action)).toEqual(expectedState)
  })
})
