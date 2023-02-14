import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import Index from "./pages/Index";
import Game from "./pages/Game";

export default function App() {
  
    return(
      <Router>
        <Routes>
        <Route path="/" exact element={<Index/>} />
        <Route path="/game" exact element={<Game/>} />
        </Routes>
      </Router>
    )
  
}
