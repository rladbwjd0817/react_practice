import React from 'react'

// 4. 삼항연산자를 사용해서 age가 20 이상이면 "성인", 아니면 "미성년자"를 출력하세요.

const Test4 = () => {
  const age = 32;
  
  return (
    <>
      <div>{age >= 20 ? '성인' : '미성년자'}</div>
    </>
  )
}

export default Test4