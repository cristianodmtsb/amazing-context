import './App.css';
import { CounterContextProvider } from './contexts/CounterContext';
import { Home } from './templates/Home'

function App() {
  return (
    <CounterContextProvider>
      <div className="App">
        <Home />
      </div>
    </CounterContextProvider>
  );
}

export default App;
