import React,{useState} from 'react'
import './studentForm.css'
import axios from  '../../axios'



function StudentForm() {
   let user={name:"",admissionNumber:"",department:"",batch:"",mobileNumber:"",address:""}
   const [student, setStudent] = useState(user)

   const submit =(e)=>{
       e.preventDefault();
     //  console.log(student)
      
      // setStudent(user)
       axios.post('/add-student',student).then((response)=>{
           //console.log(response.data);
           alert("Added")
           window.location.reload()
       })
   }

    return (
        <div className="main-div-add-student">

            <form action="" className="form" onSubmit={submit}>

             <h3 className="heading" onClick={()=>{console.log(student); console.log(user);}}>Add New Student</h3>
             <input className="inputField" type="text" placeholder="Student Name"  onChange={(e)=>{user.name=e.target.value}} /><br />
             <input className="inputField" type="text" placeholder="Admission Number" onChange={(e)=>{user.admissionNumber=e.target.value}} /><br />
             <input className="inputField" type="text" placeholder="Department"onChange={(e)=>{user.department=e.target.value}}  /><br />
             <input className="inputField" type="text" placeholder="Batch(2000-2004)" onChange={(e)=>{user.batch=e.target.value}}/><br />
             <input className="inputField" type="text" placeholder="Mobile Number" onChange={(e)=>{user.mobileNumber=e.target.value}} /><br />
             <input className="inputField" type="text" placeholder="Address"onChange={(e)=>{user.address=e.target.value}} /><br />
             <input type="submit" value="Add" />


            </form>
            
        </div>
    )
}

export default StudentForm
