import React from 'react'

const Test12 = () => {
  const value1 = "hello"; //true
  const value2 = 0; //false
  const value3 = ""; //false
  const value4 = null; //false
  const value5 = 100; //true

  const score = 0;
  const name = "";
  return (
    <>
      <div>1. {value1 && "출력됨"}</div> {/* hello출력됨 */}
      <div>2. {value2 && "출력됨"}</div> {/* 출력 X */}
      <div>3. {value3 || "기본값"}</div> {/* 기본값 */}
      <div>4. {value4 || "null입니다"}</div> {/* null입니다 */}
      <div>5. {value5 && value1}</div> {/* 100hello */}
      <div>6. {value2 || value5}</div> {/* 100 */}
      <div>점수: {score || "점수 없음"}</div>  
    </>
  )
}

export default Test12