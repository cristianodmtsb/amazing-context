import * as actionTypes from './action-types';

export const buildActions = (dispatch) => {
  return {
    INCREMENT: () => dispatch({ type: actionTypes.INCREMENT }),
    DECREMENT: () => dispatch({ type: actionTypes.DECREMENT }),
    RESET: () => dispatch({ type: actionTypes.RESET }),
    SET_COUNT: (count) => dispatch({ type: actionTypes.SET_COUNT, payload: count }),
    SET_COUNT_ASYNC: () => asyncIncrementFn(dispatch),
    SET_COUNT_ASYNC_SUCCESS: () => dispatch({ type: actionTypes.SET_COUNT_ASYNC_SUCCESS }),
    SET_COUNT_ASYNC_ERROR: () => asynErrorFn(dispatch),
  }
}

// função externa
const asyncIncrementFn = async (dispatch) => {
  dispatch({ type: actionTypes.SET_COUNT_ASYNC });

  return await new Promise((resolve) => {
    setTimeout(() => {
      dispatch({ type: actionTypes.SET_COUNT_ASYNC_SUCCESS });
      resolve('RESOLVED');
    }, 2000);
  });
}

const asynErrorFn = async (dispatch) => {
  dispatch({ type: actionTypes.SET_COUNT_ASYNC });

  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      dispatch({ type: actionTypes.SET_COUNT_ASYNC_ERROR });
      reject('RESOLVED');
    }, 2000);
  });
}
