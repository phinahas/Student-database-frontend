import React,{useContext} from 'react'
import './specificStudent.css'
import {AppContext} from '../../useContext'
function SpecificStudent() {

    const {student,setStudent,doEdit,setEdit} = useContext(AppContext)
    
    const display=()=>{
        console.log(student);
        console.log(doEdit);
    }

    return (
        <div className="main-div">
            <div className="detailes">
               
                <h3>Name:{student.name}</h3>
                <p>Admission no:{student.admissionNumber}</p>
                <p>Department:{student.department}</p>
                <p>Batch:{student.batch}</p>
                <p>Mobile:{student.mobileNumber}</p>
                <p>Address:{student.address}</p>
            </div>
            <button style={{marginTop:"20px"}} onClick={()=>{setEdit(true)}}>Edit</button>
            
        </div>
    )
}

export default SpecificStudent
