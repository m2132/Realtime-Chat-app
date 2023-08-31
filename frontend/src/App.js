import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Regsiter from './pages/Regsiter';
import Home from './pages/Home';
import Start from './components/Start';
import HomePage from './pages/HomePage';
import Camera from './components/Camera'

function App() {
  return (
    <div className="bg-[#F8F4EA]">
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Regsiter />} />
          <Route exact path="/chats" element={<Home />} />
          <Route exact path="/start" element={<Start />} />
          <Route exact path="/camera" element={ <Camera/>} />
          <Route exact path="/" element={ <HomePage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
