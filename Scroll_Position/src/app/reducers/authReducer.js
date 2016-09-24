const createReducer = (reactions, defState = {}) => (state = defState, action) => {
  if (!reactions[action.type]) {
    return state;
  }
  return reactions[action.type](state, action.payload);
}

const authReducer = createReducer({
  SET_AUTH: (state, payload) => payload,
  //FETCH_POST: (state, post) => ({...state, post})
}, true)

const setAuth = dispatch => payload =>  dispatch({
  type: 'SET_AUTH',
  payload
});

/*
const setPost = dispatch => payload => axios.get('someUrl')
.then(res => dispatch({
  type: 'SET_POST',
  payload: res.data
}))
.catch(res => dispatch({
  type: 'SET_POST_ERROR',
  payload: res.error
}));
*/

export {
  setAuth,
};
export default authReducer;
