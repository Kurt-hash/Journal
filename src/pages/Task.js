import React from 'react'
import Forms from './Forms'
import {Container } from 'reactstrap'
import {useState, useEffect} from 'react'



function Task() {
    const [date, setDate] = useState("")
    const [task, setTask] = useState("")
    const [taskInfos, setTaskInfos] = useState(
        localStorage.getItem('Tasks') ? JSON.parse(localStorage.getItem('Tasks')):[]);
        const Handledate = (event) => {
            console.log(event.target.value)
            setDate(event.target.value)
        }
        const Handletask = (event) => {
            console.log(event.target.value)
            setTask(event.target.value)
        }
        const HandleSubmitForm = (event) => {
            event.preventDefault()
            if (date !== "" && task !== ""){
                 const taskInfo = {date, task};
                 setTaskInfos([...taskInfos,taskInfo]);
                 setDate('');
                 setTask('');
    
            }
            else{
             console.log("Invalid data")
            }
         }

         useEffect( () =>{
            localStorage.setItem("Tasks", JSON.stringify(taskInfos))
        },[taskInfos]);
    
  return (
    <Container className="text-center">
       
            <h3 className = "display-6">Task</h3>
            <Forms date =  {date} Handledate ={Handledate} task =  {task} Handletask ={Handletask}  HandleSubmitForm = {HandleSubmitForm}/> 

    </Container>
  )
}

export default Task
