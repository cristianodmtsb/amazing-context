import * as actions from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.GET_POSTS_ASYNC_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
      }
    case actions.GET_POSTS_ASYNC_ERROR:
      return {
        ...state,
        isLoading: false,
      }
    case actions.GET_POSTS_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case actions.GET_POSTS_ASYNC:
      return {
        ...state,
        isLoading: true,
      }
    default:
      return state;
  }
}
