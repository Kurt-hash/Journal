import React from 'react'
import {Container } from 'reactstrap'
import Form from './Form'
import {useState, useEffect} from 'react'
import BasicTable from './Table';

function ProductInformation() {
    const [ProductID, setProductID] = useState("")
    const [ProductName, setProductName] = useState("")
    const [ProductPrice, setProductPrice] = useState("")
    const [ProductInfos, setProductInfos] = useState(
        localStorage.getItem('Products') ? JSON.parse(localStorage.getItem('Products')):[]);
        const HandleProductID = (event) => {
            console.log(event.target.value)
            setProductID(event.target.value)
        }
    
        const HandleProductName = (event) => {
        console.log(event.target.value)
        setProductName(event.target.value)
    }
    const HandleProductPrice = (event) => {
        console.log(event.target.value)
        setProductPrice(event.target.value)
    }
    const HandleSubmitForm = (event) => {
       event.preventDefault()
       if (ProductName !== "" && ProductPrice > 0 && ProductID !== ""){
            const ProductInfo = {ProductName, ProductPrice};
            setProductInfos([...ProductInfos,ProductInfo]);
            setProductID('');
            setProductName('');
            setProductPrice('');
       }
       else{
        console.log("Invalid Product Name or Product Price")
       }
    }

    useEffect( () =>{
        localStorage.setItem("Products", JSON.stringify(ProductInfos))
    },[ProductInfos]);
//    ProductInfos = JSON.parse(localStorage.getItem('Products'))

    
  return (
    <Container className="text-center">
       
            <h3 className = "display-6">Product Information</h3>
            <Form ProductID =  {ProductID} HandleProductID ={HandleProductID} ProductName =  {ProductName} HandleProductName ={HandleProductName} ProductPrice ={ProductPrice} HandleProductPrice ={HandleProductPrice} HandleSubmitForm = {HandleSubmitForm}/> 
            <BasicTable props={ProductInfos} />
    </Container>
  )
}

export default ProductInformation
