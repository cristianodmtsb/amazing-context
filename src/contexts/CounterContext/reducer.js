import * as actions from './action-types';
import { initialState } from '.';

export const reducer = (state, action) => {
  console.log('action', action)
  // eslint-disable-next-line default-case
  switch (action.type) {
    case actions.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      }
    case actions.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      }
    case actions.RESET:
      return {
        ...initialState,
      }
    case actions.SET_COUNT:
      return {
        ...state,
        ...action.payload,
      }
    case actions.SET_COUNT_ASYNC:
      return {
        ...state,
        isLoading: true,
      }
    case actions.SET_COUNT_ASYNC_SUCCESS:
      return {
        ...state,
        isLoading: false,
        count: state.count + 1,
      }
    case actions.SET_COUNT_ASYNC_ERROR:
      return {
        ...state,
        isLoading: false,
      }
  }
  return state;
}
