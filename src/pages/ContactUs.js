import React, {useState, useEffect, useRef} from 'react'

let retrieveData = localStorage.getItem('ContactData') ? JSON.parse(localStorage.getItem("ContactData")) : [];
function ContactUs() {
    let fNameRef = useRef(null);
    let lNameRef = useRef(null);
    let emailRef = useRef(null);
    let messageRef = useRef(null);
    const [ID, setID] = useState(Date.now());
    let [allContacts, setAllContacts] = useState([retrieveData])
    function HandleSubmit(event){
        event.preventDefault();
        let data = {
            ID : ID,
            FirstName : fNameRef.current.value,
            LastName : lNameRef.current.value,
            Email : emailRef.current.value,
            Message : messageRef.current.value,
        }

        setAllContacts([...allContacts, data]);
        alert(JSON.stringify(data));
    }
    useEffect(()=> {
        localStorage.setItem("ContactData", JSON.stringify(allContacts))
    },[allContacts])
  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <label for="fName">First Name</label>
        <input type="text" name="fName" id="fName" ref={fNameRef}  required/><br/>
        <label for="lName">Last Name</label>
        <input type="text" name="lName" id="lName" ref={lNameRef}  required/><br/>
        <label for="email">Email</label>
        <input type="text" name="email" id="email" ref={emailRef}  required/><br/>
        <textarea rows="10" cols="30" name='message' ref={messageRef}></textarea><br/>
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}

export default ContactUs
