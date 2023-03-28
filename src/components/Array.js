import React from 'react'

const array = () => {
    let studentName = [
        {
          studentID: 1,
          studentName: 'Kurt',
          studentGrade: 75
        },
        {
          studentID: 2,
          studentName: 'Daryl',
          studentGrade: 99
        },
        {
          studentID: 3,
          studentName: 'Reynald',
          studentGrade: 98,
        }
    ]
  return (
    <div>
      <h1>Student List</h1>
          {studentName.map((student) => 
            <div>
             <span><h3 className ="Students">Student Name:</h3>{student.studentName}
                   <h3 className ="Students">Student Grade:</h3> {student.studentGrade}
                   <h3 className ="Students">Student ID:</h3> {student.studentID}</span>
             </div>
      
          
          )
          }
    </div>
  )
}

export default array
