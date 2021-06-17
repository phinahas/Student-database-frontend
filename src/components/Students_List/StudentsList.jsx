import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { useHistory } from 'react-router-dom'
import './studentsList.css'

function StudentsList() {
    const history = useHistory();
    const [studentsList, setStudentsList] = useState([])

    useEffect(() => {
        console.log("Renderd");
        axios.get('/').then((response) => {
            //console.log(response.data);
            setStudentsList(response.data);

        })


    }, [])

    const deleteStudent = (id) => {
        console.log(id);
        axios.get(`/delete-student/${id}`).then((response) => {
            console.log(response.data);
            axios.get('/').then((response) => {
                //console.log(response.data);
                setStudentsList(response.data);

            })
        })

    }

    const viewStudentButton=(id)=>{
        console.log(id);
        history.push(`/view-student/${id}`);

    }

    return (

        <div className="main-div-student-list">
            <div className="students-table">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Admission</th>
                        <th>View</th>
                        <th>Delete</th>
                    </tr>
                    {studentsList.map((obj) => (
                        <tr>
                            <td>{obj.name}</td>
                            <td>{obj.admissionNumber}</td>
                            <td><button style={{ backgroundColor: "blue", color: "white" }} onClick={()=>{viewStudentButton(obj._id)} }>View</button></td>
                            <td><button style={{ backgroundColor: "red", color: "white" }} onClick={() => { deleteStudent(obj._id) }} >Delete</button></td>
                        </tr>

                    ))}

                </table>
            </div>
        </div>
    )
}

export default StudentsList
