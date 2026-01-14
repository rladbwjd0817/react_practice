import React from 'react'

// 5. input 태그에 텍스트를 입력할 때마다 console에 "입력중"이 출력되도록 하세요.
const Test5 = () => {
  
  return (
    <>
      <input type="text" onChange={() => {
        console.log('입력중');
      }} />
    </>
   
  )
}

export default Test5