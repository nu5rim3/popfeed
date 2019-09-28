import {combineReducers} from 'redux';
import {
  GET_LIST,
  GET_LIST_FAILD,
  GET_LIST_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILD,
  GET_USER_LIST,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILD,
  GET_IMAGE_REACT,
  GET_IMAGE_REACT_SUCCESS,
  GET_IMAGE_REACT_FAILD,
} from '../Actions/index';

// store feed data
let feedData = {data: [], loading: false, error: false};
// store user data
let userData = {data: [], loading: false, error: false};
// image reaction data
let imageReactData = {data: [], loading: false, error: false};
// store image data
let profilefeedData = {data: [], loading: false, error: false};

// user data list
const userDataReducer = (state = userData, action) => {
  switch (action.type) {
    case LOGIN:
      state = Object.assign({}, state, {loading: true});
      return state;
    case LOGIN_SUCCESS:
      state = Object.assign({}, state, {data: action.data, loading: false});
      return state;
    case LOGIN_FAILD:
      state = Object.assign({}, state, {error: true, loading: false});
      return state;
    default:
      return state;
  }
};

// feed data list
const feedDataReducer = (state = feedData, action) => {
  switch (action.type) {
    case GET_LIST:
      state = Object.assign({}, state, {loading: true});
      return state;
    case GET_LIST_SUCCESS:
      state = Object.assign({}, state, {data: action.data, loading: false});
      return state;
    case GET_LIST_FAILD:
      state = Object.assign({}, state, {error: true, loading: false});
      return state;
    default:
      return state;
  }
};

// image reactions data
const imageReactDataReducer = (state = imageReactData, action) => {
  switch (action.type) {
    case GET_IMAGE_REACT:
      state = Object.assign({}, state, {loading: true});
      return state;
    case GET_IMAGE_REACT_SUCCESS:
      state = Object.assign({}, state, {data: action.data, loading: false});
      return state;
    case GET_IMAGE_REACT_FAILD:
      state = Object.assign({}, state, {error: true, loading: false});
      return state;
    default:
      return state;
  }
};

// feed data list
const profilefeedDataReducer = (state = profilefeedData, action) => {
  switch (action.type) {
    case GET_USER_LIST:
      state = Object.assign({}, state, {loading: true});
      return state;
    case GET_USER_LIST_SUCCESS:
      state = Object.assign({}, state, {data: action.data, loading: false});
      return state;
    case GET_USER_LIST_FAILD:
      state = Object.assign({}, state, {error: true, loading: false});
      return state;
    default:
      return state;
  }
};

// Combine all the reducers
const rootReducer = combineReducers({
  feedDataReducer,
  userDataReducer,
  imageReactDataReducer,
  profilefeedDataReducer,
});

export default rootReducer;
