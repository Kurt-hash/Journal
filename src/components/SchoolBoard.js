import React from 'react'

const SchoolBoard = (props) => {


  return (
    <tr>
      <td> {props.ID}</td>
      {props.category ? (<td>{props.category}</td>) : ('-')}
      <td> {props.post}</td>
    </tr>
    // <div>
    //   <h3>ID: {props.ID}</h3>
    //   <h3>Category: {props.category}</h3>
    //   <h3>Post: {props.post}</h3>
    // </div>
  )
}

export default SchoolBoard
