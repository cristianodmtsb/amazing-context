import { useContext, useEffect, useRef } from 'react';
import { getPosts } from '../../contexts/PostsProvider/actions';
import { PostsContext } from '../../contexts/PostsProvider/context';

export const Posts = () => {
  const isMounted = useRef(true);
  const postsContextData = useContext(PostsContext);
  const { stateDataPosts, dispatchPosts } = postsContextData;

  useEffect(() => {
    // fetch data
    getPosts(dispatchPosts).then(dispatch => {
      if(isMounted.current){
        dispatch();
      }
    });
  }
  // eslint-disable-next-line
  , []);

  return (
    <div>
      <h1>Posts</h1>
      {stateDataPosts.isLoading && <p>Loading...</p>}
      <ul>

        {stateDataPosts?.posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )

}
