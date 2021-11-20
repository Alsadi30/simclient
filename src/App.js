import Login from "./pages/login";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Signup from "./pages/signup";
import SimAll from "./pages/simCard";
import AddAttachment from "./pages/attachment";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
        <Route path='signinn' element={<Signup />} />
          <Route path='login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/simcard' element={<SimAll />} />
          <Route path='/sim/attachment/:id' element={<AddAttachment />} />
        </Routes>
      </div>
    </BrowserRouter>  
  );
}

export default App;

