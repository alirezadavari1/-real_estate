
import React from "react";
import Header from '../src/components/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Welcome from "./components/Welcome.jsx";
function App() {

  return (
     <div>
         <Header />
         <Welcome />
    </div>
  )
}

export default App;
