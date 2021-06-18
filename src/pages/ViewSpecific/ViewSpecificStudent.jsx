import React, { useEffect, useState } from 'react'
import './viewSpecificStudent.css'
import SpecificStudent from '../../components/Specific_Student/SpecificStudent'
import StudentUpdateForm from '../../components/Student_Update_Form/StudentUpdateForm'
import axios from '../../axios'
import { AppContext } from '../../useContext'

//To view Specific Student
function ViewSpecificStudent({ match }) {
    console.log(match.params.id);

    const [student, setStudent] = useState({});
    const [doEdit, setEdit] = useState(false);

    useEffect(() => {

        axios.get(`/specific-student/${match.params.id}`).then((response) => {
            console.log(response.data);
            setStudent(response.data);
        })


    }, [])


    return (
        <div className="main-div-view-specific">
            <div className="specific-student">
                <AppContext.Provider value={{ student: student, setStudent: setStudent, doEdit: doEdit, setEdit: setEdit }}>
                    <SpecificStudent />
                </AppContext.Provider>
            </div>
            <AppContext.Provider value={{ student: student, setStudent: setStudent, doEdit: doEdit, setEdit: setEdit }}>
                {doEdit ? <StudentUpdateForm /> : ""}

            </AppContext.Provider>
        </div>
    )
}

export default ViewSpecificStudent
