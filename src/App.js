// import logo from './logo.svg';
import './App.css';
import AppRouter from './config/router';
// import Firebase from "./config/firebase";
import * as React from 'react';
import NavBar from './components/Navbar2';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import NavBar3 from './components/Navbar3'
import AppBar from '@mui/material/AppBar';

    
function App() {
  return (
    <div className="App">
     <NavBar3/>
      
      <AppRouter />


      {/* <Stack direction="row" spacing={2}>
      <Button color="secondary">Secondary</Button>
      <Button variant="outlined" color="success">
        Success
      </Button>
      <Button variant="contained" color="error">
        Error
      </Button>
    </Stack> */}

    </div>
  );
}


export default App;
