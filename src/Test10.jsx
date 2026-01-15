import React, { useState } from 'react'

// 10. 좋아요 버튼을 만드세요. 클릭하면 "❤️ 좋아요 취소" ↔ "🤍 좋아요" 가 바뀌고, 좋아요 개수도 증가/감소해야 합니다.
const Test10 = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  
  return (
    <>
      {/* 클릭 이벤트 구현 */}
      <button 
        type='button'
        onClick={() => {setIsLiked(!isLiked)
          setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)
        }}
      >{
        isLiked ? '❤️ 좋아요 취소' : '🤍 좋아요'
      }
      </button>
      <p>좋아요 {likeCount}개
      </p>
    </>
   
  )
}

export default Test10