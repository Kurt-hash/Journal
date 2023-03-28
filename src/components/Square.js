import React from 'react'

const Square = () => {
    let array = [4,9,16,25]
    let result = array.map(Math.sqrt).join(",");
  return (
    <p>The square root of {array} is {result}</p>
  )
}

export default Square
