import React, { useState } from 'react'

// 7. 버튼을 클릭하면 "보이기" ↔ "숨기기"가 토글되고, 텍스트도 보였다 안 보였다 하는 컴포넌트를 만드세요.


const Test7 = () => {
  const [isShow, setIsShow] = useState(true);

  return (
    <>
      <div>
        {isShow ? '안녕하세요' : null}
          
        <button type='button' onClick={() => {
          setIsShow(!isShow);
        }}>
          {isShow ? '숨기기' : '보이기'}
        </button>
      </div>
    </>
  )
}

export default Test7