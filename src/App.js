import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Books from './pages/Books';
import Add from './pages/Add';
import Update from './pages/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add</Link></li>
        <li><Link to="/update">Update</Link></li>
      </ul>
      </div>
      <h3>Hello Ankit How Are You</h3>

    
      <Routes>
        <Route path='/' element={<Books/>} />
        <Route path='/add' element={<Add/>} />
        <Route path='/Update/:id' element={<Update/>} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
