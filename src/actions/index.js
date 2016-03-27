"use strict";
import transformDate from '../utils/transformDate';

window.transformDate = transformDate;

export const ACHIEVED_ERROR_LIST = 'ACHIEVED_ERROR_LIST';

export function achievedErrorList (json) {
  return {
    type: ACHIEVED_ERROR_LIST,
    list: json.result.map((jsError) => {
      jsError.fromNow = transformDate(jsError.date);
      return jsError;
    })
  };
}

export function fetchAchievedErrorList (params) {
  return dispatch => {
    //dispatch(loadingShow);
    return fetch('/api/error/list/all')
      .then(response => response.json())
      .then(json => dispatch(achievedErrorList(json)))
  };
}


//export function selectReddit(reddit) {
//  return {
//    type: SELECT_REDDIT,
//    reddit
//  }
//}
//
//export function invalidateReddit(reddit) {
//  return {
//    type: INVALIDATE_REDDIT,
//    reddit
//  }
//}
//
//function requestPosts(reddit) {
//  return {
//    type: REQUEST_POSTS,
//    reddit
//  }
//}
//
//function receivePosts(reddit, json) {
//  return {
//    type: RECEIVE_POSTS,
//    reddit: reddit,
//    posts: json.data.children.map(child => child.data),
//    receivedAt: Date.now()
//  }
//}
//
//function fetchPosts(reddit) {
//  return dispatch => {
//    dispatch(requestPosts(reddit))
//    return fetch(`https://www.reddit.com/r/${reddit}.json`)
//      .then(response => response.json())
//      .then(json => dispatch(receivePosts(reddit, json)))
//  }
//}
//
//function shouldFetchPosts(state, reddit) {
//  const posts = state.postsByReddit[reddit]
//  if (!posts) {
//    return true
//  }
//  if (posts.isFetching) {
//    return false
//  }
//  return posts.didInvalidate
//}
//
//export function fetchPostsIfNeeded(reddit) {
//  return (dispatch, getState) => {
//    if (shouldFetchPosts(getState(), reddit)) {
//      return dispatch(fetchPosts(reddit))
//    }
//  }
//}
