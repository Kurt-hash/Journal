import React from 'react'

const Greetings = (props) => {
  const greetings = <h1>Hello, My name is {props.name}</h1>;
// const firstName = "Kurt";
//   const lastName = "Osorio";
//   const greetings = <h1>Hello, My name is {firstName} {lastName}</h1>;
  return (
    <div>
      {greetings}
    </div>
  )
}

export default Greetings
