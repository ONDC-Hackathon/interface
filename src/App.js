import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"  Component={Home} />
          <Route path="/register" Component={Register} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/login" Component={Login} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
