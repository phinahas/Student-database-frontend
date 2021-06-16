
import './App.css';
import Navbar from './components/Navbar/Navbar';
import StudentForm from './components/Add_Student_Form/StudentForm';
import SpecificStudent from './components/Specific_Student/SpecificStudent';
import StudentsList from './components/Students_List/StudentsList';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      
      <StudentsList/>
     
    </div>
  );
}

export default App;
