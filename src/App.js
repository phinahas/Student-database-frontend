import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
      <Switch>
       <Route path='/view-student/:id' component={ViewSpecificStudent} /> 
       <Route path='/' exact> <Home /></Route>
       <Route path='/add-student'> <AddStudent /></Route>
       </Switch>
      </Router>



    </div>
  );
}

export default App;
