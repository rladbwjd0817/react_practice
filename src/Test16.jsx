import React from 'react'
import {add, multiply} from './util/calculator'

const Test16 = () => {
  const result1 = add(5, 3);
  const result2 = multiply(4, 2);

  return (
    <div>
      <p>5 + 3 = {result1}</p>
      <p>4 * 2 = {result2}</p>
    </div>
  )
}

export default Test16