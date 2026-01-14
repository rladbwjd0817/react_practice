import React from 'react'
// 1. 버튼을 클릭하면 "안녕하세요!"를 alert로 띄우는 컴포넌트를 작성하세요.

const Test1 = () => {
  return (
    <>
      <button type='button' onClick={() => {
        alert('안녕하세요!');
      }}>버튼</button>
    </>
  )
}

export default Test1