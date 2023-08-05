import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarList from "./Component/CarList";

function App() {
  return (
    <div className="App">
     
      <Router>
        <Routes>
          <Route path="/list" element={<CarList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
