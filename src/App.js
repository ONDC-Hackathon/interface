import './App.css';
import Button from '@mui/material/Button';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'

function App() {
  return (
    <div className="App">
      <h1>it_works_on_local</h1>
      <Button variant="contained">Hello world</Button>
      <Login/>
      <BrowserRouter>
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
      </BrowserRouter>
    </div>
  );
}

export default App;
