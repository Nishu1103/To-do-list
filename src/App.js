import './App.css';
import Navbar from './Navbar';
// import Home from './home';
import Login from './login';
function App() {
  return (
    <div className="App">
        <Navbar />
      <div className="content">
        <h1>
          Nishant
        </h1>
        <Login />
      </div>
    </div>
  );
}

export default App;
