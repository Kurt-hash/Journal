import React, {useState, useEffect, useRef} from 'react'
import {Form as BTForm, FormGroup, Input, Label, Col, Button} from "reactstrap"
import {Container } from 'reactstrap'

let retrieveData = localStorage.getItem("JournalData") ? JSON.parse(localStorage.getItem("JournalData")) : [];
function Journal({date, thoughts}) {
    let dateRef = useRef(null);
    let thoughtsRef = useRef(null);
    let [allJournal, setallJournal] = useState([retrieveData]);
    function HandleSubmit(event){
        event.preventDefault();
        let data = {
            date : dateRef.current.value,
            thoughts : thoughtsRef.current.value,
        }
        setallJournal([...allJournal, data]);
        alert(JSON.stringify(data));
    }
    useEffect(()=>{
        localStorage.setItem("JournalData", JSON.stringify(allJournal));
    }, [allJournal])
  return (

   <Container className='mt-5'>
     <form onSubmit={HandleSubmit}>
        <label for="date">Date:</label>
        <input type="text" name="date" id='date' ref={dateRef} /><br/>
        <input type="text" name="thoughts" id='thoughts' ref={thoughtsRef}  placeholder='Input field for thoughts'/><br/>
        {/* <button type="submit">Submit</button> */}
     <Button type="submit" color="primary">Save</Button>
     </form>
        {/* <h1>Thoughts for the Day</h1>
      <form onSubmit={HandleSubmit}>
        <label for="date">Date:</label>
        <input type="text" name="date" id='date' ref={dateRef} /><br/>
        <input type="text" name="thoughts" id='thoughts' ref={thoughtsRef}  placeholder='Input field for thoughts'/><br/>
        <button type="submit">Submit</button>
      </form> */}
      </Container>


   
//     <Container>
//     <BTForm onSubmit={HandleSubmitForm}>
//     <FormGroup className='row mt-5'>
//         <Label sm ={2} for="date">Date:</Label>
//         <Col sm ={4} ><Input type="text" name="date" id="date" ref={dateRef} placeholder="Enter Date" ></Input></Col>
//     </FormGroup>
//     <FormGroup className='row'>
//         <Label sm ={2} for="thoughts">Thoughts for the day</Label>
//         <Col sm ={4} > <Input type="text" name="thoughts" id="thoughts" ref={thoughtsRef} placeholder="Input field for thoughts" ></Input></Col>
//     </FormGroup>
//     <Button type="submit" color="primary">Save</Button>

//   </BTForm>
//   </Container>
    
  )
}

export default Journal
