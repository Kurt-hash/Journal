import React from 'react'
import '../css/style.css';
import ContactCardDetails from './ContactCardDetails';
function ContactCardMain() {
  return (
    <div className='contacts'>
      <ContactCardDetails contact = {
        {
        name: "Kebs",
        imageURL: './logo192.png',
        phoneNum: "123456",
        email: "akosikebs@gmail.com"
        }

        }/>

        <ContactCardDetails contact = {
        {
        name: "Daryl",
        imageURL: 'http://placekitten.com/400/400',
        phoneNum: "123456",
        email: "akosikebs@gmail.com"
        }

        }/>

        <ContactCardDetails contact = {
        {
        name: "Reynald",
        imageURL: 'http://placekitten.com/400/300',
        phoneNum: "123456",
        email: "akosikebs@gmail.com"
        }

        }/>

        <ContactCardDetails contact = {
        {
        name: "Alexa",
        imageURL: 'http://placekitten.com/200/100',
        phoneNum: "123456",
        email: "akosikebs@gmail.com"
        }

        }/> 
    </div>
  )
}

export default ContactCardMain
