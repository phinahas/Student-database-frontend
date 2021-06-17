import React from 'react'
import './viewSpecificStudent.css'
import SpecificStudent from '../../components/Specific_Student/SpecificStudent'
import StudentUpdateForm from '../../components/Student_Update_Form/StudentUpdateForm'

function ViewSpecificStudent() {
    return (
        <div className="main-div-view-specific">
            <div className="specific-student">
                <SpecificStudent />
            </div>
           

            <StudentUpdateForm />
        </div>
    )
}

export default ViewSpecificStudent
