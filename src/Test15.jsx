import React, { useState } from 'react'

/* 함수형 업데이트를 사용해서 좋아요 버튼을 만드세요.
버튼 클릭 시 좋아요 수가 1씩 증가
좋아요 수를 화면에 표시
함수형 업데이트 방식 사용하기 */

const Test15 = () => {
  /* 좋아요 수 저장할 변수 생성 */
  const [likeCnt, setLikeCnt] = useState(0);

  return (
    <div>
      <h3>{likeCnt}</h3>
      <button 
        type='button'
        onClick={prev => {
          console.log(prev);
          setLikeCnt(prev => prev + 1)
        }}
      >like</button>
    </div>
  )
}

export default Test15