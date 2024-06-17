import './App.css';
import { BrowserRouter as Router, Route, Routes, useRoutes} from 'react-router-dom'; 
import Main from './Main'
import React from 'react';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main/>}/>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
