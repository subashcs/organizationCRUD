import React from 'react';
import Home from './views/Home';
import './App.css';

function App() {
  return (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h3 className="navbar-brand">MyOrganization</h3>
        </nav>  
       
        
        <Home/>
        <footer>
        <div className="footer-copyright text-center py-3">© 2018 developed by _ 
          Subash
        </div>
        </footer>

    </div>
  );
}

export default App;
