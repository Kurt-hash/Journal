import React from 'react'
import {Form as BTForm, FormGroup, Input, Label, Col, Button} from "reactstrap"




function Forms(date, Handledate, task, Handletask, HandleSubmitForm) {
  return (
    <BTForm onSubmit={HandleSubmitForm}>
        <FormGroup className='row'>
            <Label sm ={2} for="date">Date:</Label>
            <Col sm ={4} ><Input type="number" name="date" id="date" placeholder="Enter Date" value={date} onChange={Handledate}></Input></Col>
        </FormGroup>
        <FormGroup className='row'>
            <Label sm ={2} for="task">Task</Label>
            <Col sm ={4} ><Input type="text" name="task" id="task" placeholder="Enter task" value={task} onChange={Handletask}></Input></Col>
        </FormGroup>
        <Button type="submit" color="primary">Submit</Button>

      </BTForm>
  )
}

export default Forms
