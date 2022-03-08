import { useReducer } from 'react';
import { PostsContext } from './context';
import { reducer } from './reducer';
import { dataPosts } from './data'

export const PostsProvider = ({ children }) => {
  const [stateDataPosts, dispatchPosts] = useReducer(reducer, dataPosts);

  return (
    <PostsContext.Provider value={{ stateDataPosts, dispatchPosts }}>
      {children}
    </PostsContext.Provider>
  );
}
