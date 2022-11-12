import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Navbar/>
        {/* <Route path="" component={}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;