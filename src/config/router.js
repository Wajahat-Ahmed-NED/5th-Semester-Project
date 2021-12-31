
import { BrowserRouter as Router,  Routes,  Route,} from "react-router-dom";


import FloatingActionButtons from "../components/MuiButton";
import Dashboard from "../screen/Dashboard";
import Login from "../screen/Login";
import Signup from "../screen/Signup";
import Navbar2 from "../components/Navbar2";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Navbar2' element={<Navbar2/>}/>
          <Route path='/muibutton' element={<FloatingActionButtons/>}/>
        </Routes>
      </div>
    </Router>
  );
}

            
     