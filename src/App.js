import './App.css';
import { CounterContextProvider } from './contexts/CounterContext';
import { PostsProvider } from './contexts/PostsProvider'
import { Home } from './templates/Home'
import { Posts } from './components/Posts'

function App() {
  return (
    <CounterContextProvider>
      <div className="App">
        <Home />
        <PostsProvider>
          <Posts />
        </PostsProvider>
      </div>
    </CounterContextProvider>
  );
}

export default App;
