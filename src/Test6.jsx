import React, { useState } from 'react'

// 6. 버튼을 클릭하면 카운트가 1씩 증가하는 컴포넌트를 작성하세요.

const Test6 = () => {
  const [count, setCount] = useState(0);
  console.log(count)

  return (
    <>
      <h2>count : {count}</h2>
      <button type='button' onClick={() => {
          setCount(count + 1);
      }}>버튼</button>
    </>
  
  )
}

export default Test6