
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {Routes,Route, Navigate} from "react-router-dom"
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" Component={Home}/> 
        <Route exact path="/about" Component={About}/>
        <Route exact path="/Contact" Component={Contact}/>
        <Route exact path="/Service" Component={Service}/>
        <Route path="*" element={<Navigate to ="/" />}/>
      </Routes>
      
     
    </div>
    </>
  );
}

export default App;
