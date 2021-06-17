import React,{useEffect,useState} from 'react'
import './studentsList.css'
function StudentsList() {
   
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
              <tr>
                  <td>Phinahas</td>
                  <td>10958</td>
                  <td><button style={{backgroundColor:"blue",color:"white"}}>View</button></td>
                  <td><button style={{backgroundColor:"red", color:"white"}}>Delete</button></td>
              </tr>
          </table>
          </div>
        </div>
    )
}

export default StudentsList
