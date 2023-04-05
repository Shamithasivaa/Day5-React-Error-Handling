import logo from './logo.svg';
import './App.css';

import Errorboundary from './Errorboundary';
import Errorhandling from './Errorhandling';
function App() {
return (

<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    
    <Errorboundary>
        <Errorhandling a={["pasta","dhaal","wheat","rice"]}>
      </Errorhandling>
      </Errorboundary>

  </header>
</div>
);
}

export default App;