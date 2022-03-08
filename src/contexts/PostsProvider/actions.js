import * as types from './types'

export const getPosts = async (dispatch) => {
  dispatch({ type: types.GET_POSTS_LOADING })
  const postsRaw = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postsRaw.json();
  return () => dispatch({ type: types.GET_POSTS_ASYNC_SUCCESS, payload: posts });
}
