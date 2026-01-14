import React, { useState } from 'react'

//9. 두 개의 버튼(+10, -10)으로 숫자를 증가/감소시키는 컴포넌트를 만드세요. 단, 숫자가 0 미만이 되면 0으로 유지되어야 합니다.

const Test9 = () => {
  const [number, setNumber] = useState(15);

  return (
    
    <>
      <h2>숫자: {number}</h2>
      <button type='button' onClick={() => {
        setNumber(number + 10);
      }}>+10</button>
      <button type='button' onClick={() => {
        setNumber(number - 10 < 0 ? 0 : number - 10);
      }}>-10</button>
    </>
  )
}

export default Test9

// onClick의 화살표함수 안에 if, Math.max 둘다 사용가능 