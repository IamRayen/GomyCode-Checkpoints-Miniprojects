import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './Components/SideBar';
import CommSec from './Components/CommentSec';

function App() {
  return (
    <div className="App">
      <SideBar />
      <h1 className="cccc">Comments:</h1>
      <CommSec />
    </div>
  );
}

export default App;
