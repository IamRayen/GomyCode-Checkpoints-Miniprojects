import './App.css';
import PP from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
function App() {
  return (
      <div className="App">
        <div id="BC">
        <PP/>
        <FullName name='Rayen'/>
        <Address/>
      </div>
    </div>
);
}

export default App;
