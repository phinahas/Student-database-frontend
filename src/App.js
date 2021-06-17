import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import ViewSpecificStudent from './pages/ViewSpecific/ViewSpecificStudent';
import AddStudent from './pages/AddStudent';



function App() {
  return (
    <div className="App">
      <Router>
       <Navbar />
       <Route path='/view-student'> <ViewSpecificStudent /></Route>
       <Route path='/' exact> <Home /></Route>
       <Route path='/add-student'> <AddStudent /></Route>
      </Router>



    </div>
  );
}

export default App;
