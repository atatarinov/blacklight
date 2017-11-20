import axios from 'axios';

CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'

export const createUserSuccess = (user) => ({ type: CREATE_USER_SUCCESS, user: user })

//THUNK CREATORS
export const createUserOnServer = (newUser) => {
  return function thunk(dispatch) {
    return axios.post('https://blacklight-app.herokuapp.com/auth/signup', newUser)
      .then(res => res.data)
      .then(user => {
        // console.log('brand new user', user)
        dispatch(createUserSuccess(user));
      })
      .catch(err => console.log(err))
  }
}

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return action.user

    default:
      return state;
  }
}
