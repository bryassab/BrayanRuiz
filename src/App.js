
import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import Pdf from './pages/Brayan Ruiz Hv..pdf';


function App() {
  return (
    <>

      <Router>


        <div>
          <Routes>

            <Route path="/" >
              <Route path='/' element={<Home />} />
              <Route path='/.pdf' element={<Pdf />} />


            </Route>


          </Routes>


        </div>

      </Router>
    </>
  );
}

export default App;
