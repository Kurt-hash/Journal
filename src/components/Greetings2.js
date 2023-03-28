
import React,{useState, useEffect} from 'react'


const Greetings2 = () => {
    const [hourofDay, setTime] = useState(new Date().getHours());

    useEffect( () => {
        setInterval(() => {
            setTime(new Date().getHours());
        }, 1000);
    }, []);
    // const date = new Date();
    // let hourofDay =date.getHours();
    let greetings;
    if (hourofDay > 4 && hourofDay <12)
    {
        greetings = "Good Morning"
    }
    else if (hourofDay >=12 && hourofDay <18)
    {
        greetings = "Good Afternoon"
    }
    else{
        greetings = "Good Evening"
    }

  return (
    <div>
      <h1>{greetings}</h1>
      
    </div>
  )
}

export default Greetings2
