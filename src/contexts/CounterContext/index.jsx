import P from  'prop-types';
import { createContext, useContext, useReducer, useRef } from "react";
import { buildActions } from './build-actions';
import { reducer } from "./reducer";

export const initialState = {
  count: 0,
  isLoading: false,
}

const Context = createContext();

export const CounterContextProvider = ( { children } ) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useRef(buildActions(dispatch));

  return <Context.Provider value={[state, actions.current]} >{children}</Context.Provider>
}

export const useCounterContext = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('useCounterContext must be used within <CounterContextProvider>');
  }

  return [...context];
}

CounterContextProvider.propTypes = {
  children: P.node.isRequired
}
