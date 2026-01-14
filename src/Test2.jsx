import React from 'react'
// 2. 다음 요구사항대로 컴포넌트를 완성하세요.
//  숫자 100을 화면에 출력하고
// "숫자입니다" 텍스트도 함께 출력하세요
const Test2 = () => {
  const num = 100;
  console.log(num);

  return (
    <>
      <div>
        {num} 숫자입니다
      </div>
    </>
  )
}

export default Test2