import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Register';

function App() {
  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          
          <Route path="/register" element={<Register />} />
         
          
        
      </Routes>
    </BrowserRouter>
  
        
    </>
   


  );
}

export default App;
