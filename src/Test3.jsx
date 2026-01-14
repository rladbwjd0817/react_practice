import React from 'react'

// 3. 배열의 값을 구조분해할당으로 받아서 화면에 출력하세요.
 // 구조분해할당으로 first, second 변수에 저장

const Test3 = () => {
  const fruits = ['사과', '바나나', '딸기'];
  const [first, second] = fruits;

  return (
    <>
      <div>{'첫번째 : ' + first}</div>
      <div>{'두번째 : ' + second}</div>
    </>
  )
}

export default Test3