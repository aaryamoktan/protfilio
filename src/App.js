import logo from './logo.svg';
import './App.css';
import Root from './Root/Root';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Root/>
    </div></BrowserRouter>
  );
}

export default App;
