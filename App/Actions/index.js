import {encode} from 'base-64';
import '../Globle';
import NavigationService from '../Navigation/NavigationService';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILD = 'LOGIN_FAILD';

export const GET_LIST = 'GET_LIST';
export const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS';
export const GET_LIST_FAILD = 'GET_LIST_FAILD';

export const GET_USER_LIST = 'GET_USER_LIST';
export const GET_USER_LIST_SUCCESS = 'GET_USER_LIST_SUCCESS';
export const GET_USER_LIST_FAILD = 'GET_USER_LIST_FAILD';

export const GET_IMAGE_REACT = 'GET_IMAGE_REACT';
export const GET_IMAGE_REACT_SUCCESS = 'GET_IMAGE_REACT_SUCCESS';
export const GET_IMAGE_REACT_FAILD = 'GET_IMAGE_REACT_FAILD';

export const ADD_IMAGE_LIKE = 'ADD_IMAGE_LIKE';
export const ADD_IMAGE_LIKE_SUCCESS = 'ADD_IMAGE_LIKE_SUCCESS';
export const ADD_IMAGE_LIKE_FAILD = 'ADD_IMAGE_LIKE_FAILD';

export const IS_LIKE = 'IS_LIKE';
export const IS_LIKE_SUCCESS = 'IS_LIKE_SUCCESS';
export const IS_LIKE_FAILD = 'IS_LIKE_FAILD';

export const FOLLOW_USER = 'FOLLOW_USER';
export const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
export const FOLLOW_USER_FAILD = 'FOLLOW_USER_FAILD';

export const UNFOLLOW_USER = 'UNFOLLOW_USER';
export const UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';
export const UNFOLLOW_USER_FAILD = 'UNFOLLOW_USER_FAILD';

export const IS_FOLLOW = 'IS_FOLLOW';
export const IS_FOLLOW_SUCCESS = 'IS_FOLLOW_SUCCESS';
export const IS_FOLLOW_FAILD = 'IS_FOLLOW_FAILD';

// API URL
const URL = 'https://appserv-dev.popsockets.com/v1.0';

// Get the token using login data
export function userLogin(username, password, callback) {
  return dispatch => {
    dispatch({type: LOGIN});
    fetch(URL + '/auth/login/', {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + encode(username + ':' + password),
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        global.TOKEN = response.headers.get('authorization');
        return response.json();
      })
      .then(responseJson => {
        console.log('userLogin - ', responseJson);
        dispatch({type: LOGIN_SUCCESS, data: responseJson});
        if (responseJson['fault'] !== undefined) {
          callback(false);
        } else {
          global.USERNAME = responseJson.user.userName;
          callback(true);
        }
      })
      .catch(err => {
        console.log('userLogin Err- ', err);
        dispatch({type: LOGIN_FAILD});
      });
  };
}

// Get the feed list
export function getFeedList(data) {
  data.user = global.USERNAME;
  console.log('send getFeedList - ', data);
  return dispatch => {
    dispatch({type: GET_LIST});
    fetch(URL + '/popfeed/activity/list', {
      method: 'POST',
      headers: {
        Authorization: global.TOKEN,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(responseJson => {
        // console.log('getFeedList - ', responseJson);
        if (responseJson.code === 503) {
          NavigationService.navigate('LoginScreen');
        }
        dispatch({type: GET_LIST_SUCCESS, data: responseJson});
      })
      .catch(err => {
        console.log('getFeedList Err- ', err);
        dispatch({type: GET_LIST_FAILD});
      });
  };
}

// Get the profile feed list
export function getProfileFeedList(data) {
  // console.log('getProfileFeedList _ ', data);
  return dispatch => {
    dispatch({type: GET_USER_LIST});
    fetch(URL + '/popfeed/activity/list_per_user', {
      method: 'POST',
      headers: {
        Authorization: global.TOKEN,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(responseJson => {
        // console.log('getProfileFeedList - ', responseJson);
        if (responseJson.code === 503) {
          NavigationService.navigate('LoginScreen');
        }
        dispatch({type: GET_USER_LIST_SUCCESS, data: responseJson});
      })
      .catch(err => {
        console.log('getProfileFeedList Err- ', err);
        dispatch({type: GET_USER_LIST_FAILD});
      });
  };
}

// Get Image reactions
export function getImageReactions(data) {
  // console.log('getImageReactions - ', data);
  return dispatch => {
    dispatch({type: GET_IMAGE_REACT});
    fetch(URL + '/popfeed/activity/get_with_count', {
      method: 'POST',
      headers: {
        Authorization: global.TOKEN,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(responseJson => {
        // console.log('getImageReactions - ', responseJson);
        dispatch({type: GET_IMAGE_REACT_SUCCESS, data: responseJson});
      })
      .catch(err => {
        console.log('getImageReactions Err- ', err);
        dispatch({type: GET_IMAGE_REACT_FAILD});
      });
  };
}

// Get Image like reactions
export function addImageLike(data, callback) {
  data.user = global.USERNAME;
  // console.log('addImageLike - ', data);
  return dispatch => {
    dispatch({type: ADD_IMAGE_LIKE});
    fetch(URL + '/popfeed/activity/reactions/like', {
      method: 'POST',
      headers: {
        Authorization: global.TOKEN,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(responseJson => {
        // console.log('addImageLike - ', responseJson);
        dispatch({type: ADD_IMAGE_LIKE_SUCCESS, data: responseJson});
        callback(responseJson.success);
      })
      .catch(err => {
        console.log('addImageLike Err- ', err);
        dispatch({type: ADD_IMAGE_LIKE_FAILD});
      });
  };
}

// is user liked
export function isImageLiked(data, callback) {
  data.user = global.USERNAME;
  // console.log('isImageLiked - ', data);
  return dispatch => {
    dispatch({type: IS_LIKE});
    fetch(URL + '/popfeed/activity/reactions/is_liked', {
      method: 'POST',
      headers: {
        Authorization: global.TOKEN,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(responseJson => {
        // console.log('isImageLiked - ', responseJson);
        dispatch({type: IS_LIKE_SUCCESS, data: responseJson});
        callback(responseJson.success);
      })
      .catch(err => {
        console.log('isImageLiked Err- ', err);
        dispatch({type: IS_LIKE_FAILD});
      });
  };
}

// add user follow
export function followUser(data, callback) {
  data.user1 = global.USERNAME;
  // console.log('followUser - ', data);
  return dispatch => {
    dispatch({type: FOLLOW_USER});
    fetch(URL + '/popfeed/user/follow', {
      method: 'POST',
      headers: {
        Authorization: global.TOKEN,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(responseJson => {
        // console.log('followUser - ', responseJson);
        dispatch({type: FOLLOW_USER_SUCCESS, data: responseJson});
        callback(responseJson.success);
      })
      .catch(err => {
        console.log('followUser Err- ', err);
        dispatch({type: FOLLOW_USER_FAILD});
      });
  };
}

// add user unfollow
export function unFollowUser(data, callback) {
  data.user1 = global.USERNAME;
  // console.log('followUser - ', data);
  return dispatch => {
    dispatch({type: UNFOLLOW_USER});
    fetch(URL + '/popfeed/user/unfollow', {
      method: 'POST',
      headers: {
        Authorization: global.TOKEN,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(responseJson => {
        // console.log('followUser - ', responseJson);
        dispatch({type: UNFOLLOW_USER_SUCCESS, data: responseJson});
        callback(responseJson.success);
      })
      .catch(err => {
        console.log('followUser Err- ', err);
        dispatch({type: UNFOLLOW_USER_FAILD});
      });
  };
}

// is user liked
export function isfollowUser(data, callback) {
  data.user1 = global.USERNAME;
  // console.log('isfollowUser - ', data);
  return dispatch => {
    dispatch({type: IS_FOLLOW});
    fetch(URL + '/popfeed/user/is_followed', {
      method: 'POST',
      headers: {
        Authorization: global.TOKEN,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(responseJson => {
        // console.log('isfollowUser - ', responseJson);
        dispatch({type: IS_FOLLOW_SUCCESS, data: responseJson});
        callback(responseJson.success);
      })
      .catch(err => {
        console.log('isfollowUser Err- ', err);
        dispatch({type: IS_FOLLOW_FAILD});
      });
  };
}
