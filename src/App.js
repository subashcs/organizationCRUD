import React from 'react';
import Home from './views/Home';
import './App.css';

function App() {
  return (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">MyOrganization</a>
        </nav>  
       
        
        <Home/>
      
      
    </div>
  );
}

export default App;
