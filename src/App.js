import Inferno from 'inferno';
import Component from 'inferno-component';
import Header from './header/Header';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header></Header>
        </div>
      </div>
    );
  }
}

export default App;
