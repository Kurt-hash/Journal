import React from 'react'
import {Form as BTForm, FormGroup, Input, Label, Col, Button} from "reactstrap"




function Form({ProductID, HandleProductID, ProductName, HandleProductName, ProductPrice, HandleProductPrice, HandleSubmitForm}) {
  return (
   
      <BTForm onSubmit={HandleSubmitForm}>
        <FormGroup className='row'>
            <Label sm ={2} for="ProductID">Product ID</Label>
            <Col sm ={4} ><Input type="text" name="ProductID" id="ProductID" placeholder="Enter Product ID" value={ProductID} onChange={HandleProductID}></Input></Col>
        </FormGroup>
        <FormGroup className='row'>
            <Label sm ={2} for="ProductName">Product Name</Label>
            <Col sm ={4} ><Input type="text" name="ProductName" id="ProductName" placeholder="Enter Product Name" value={ProductName} onChange={HandleProductName}></Input></Col>
        </FormGroup>
        <FormGroup className='row'>
            <Label sm ={2} for="ProductPrice">Product Price</Label>
            <Col sm ={4} > <Input type="number" name="ProductPrice" id="ProductPrice" placeholder="0.00" value={ProductPrice} onChange={HandleProductPrice}></Input></Col>
        </FormGroup>
        <Button type="submit" color="primary">Submit</Button>

      </BTForm>
        
     
   
  )
}

export default Form
