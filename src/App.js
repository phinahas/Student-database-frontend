
import './App.css';
import Navbar from './components/Navbar/Navbar';
import StudentForm from './components/Add_Student_Form/StudentForm';
import SpecificStudent from './components/Specific_Student/SpecificStudent';
import StudentsList from './components/Students_List/StudentsList';
import StudentUpdateForm from './components/Student_Update_Form/StudentUpdateForm';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      
      <StudentUpdateForm/>
     
    </div>
  );
}

export default App;
