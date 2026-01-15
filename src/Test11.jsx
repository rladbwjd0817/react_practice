import React, { useState } from 'react'

// 초기 학생 정보: {name: '김철수', age: 20, grade: 'A'}
// "이름 변경" 버튼 클릭 시 → 이름을 "이영희"로 변경
// "나이 증가" 버튼 클릭 시 → 나이를 1 증가
// 스프레드 연산자를 사용해서 객체를 업데이트하세요!

const Test11 = () => {
  const [student, setStudent] = useState({name : '김철수', age : 20,grade : 'A'});
  
  return (
    <>
      <div>이름 : {student.name}</div>
      <div>나이 : {student.age}</div>
      <div>등급 : {student.grade}</div>

      <button 
        type='button'
        onClick={() => {
          setStudent({...student,
          name : '이영희'
          })
        }}  
      >이름변경</button>

      <button type='button' onClick={() => {setStudent(
       {...student,
        age : student.age + 1
       }
      )}}>나이증가</button>
    </>

  )
}

export default Test11