import usersReducer from './users-reducer'

describe('usersReducer test', () => {

  it('it should return state by default', () => {
    expect(usersReducer(undefined, {})).toEqual([])
  })

  it('it should return default state if no action type matches', () => {
    const action = {
      id: 42,
      type: 'HELLO_THERE'
    }
    expect(usersReducer(undefined, action)).toEqual([])
  })

  it('it should toggle a user', () => {
    const id = 42
    const action = {
      id: 42,
      type: 'USER_TOGGLE'
    }

    expect(usersReducer(undefined, action)).toEqual(id)
    expect(usersReducer([], action)).toEqual(id)
  })

  it('it should log out a user', () => {
    const id = 42
    const action = {
      id: 42,
      type: 'USER_LOGOUT'
    }

    expect(usersReducer(undefined, action)).toEqual([])
    expect(usersReducer([], action)).toEqual([])
  })
})
