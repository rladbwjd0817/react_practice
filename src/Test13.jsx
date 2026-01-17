import React, { useState } from 'react'

// 아이디, 비밀번호, 이름, 이메일을 입력받고, "가입하기" 버튼을 누르면 console에 모든 정보를 출력하는 컴포넌트를 만드세요.
// useState 1개만 사용 (객체로 관리)
// 공통 함수 1개로 모든 input 처리
// 가입하기 버튼 클릭 시 console에 전체 데이터 출력

const Test13 = () => {
  const [info, setInfo] = useState({
    id : '',
    pw : '',
    name : '',
    email : ''
  });
  
  
  const inputInfo = e => {
    setInfo({
      ...info,
      [e.target.name] : e.target.value
    })
  }

  
  
  return (
    <>
     <span>아이디 : </span>
     <input 
        type="text" 
        name='id'
        value={info.id} 
        onChange={e => {inputInfo(e)}
     }/> 
     <br />

     <span>비밀번호 : </span>
     <input 
        type="text" 
        name='pw'
        value={info.pw} 
        onChange={e => {inputInfo(e)}}
     />
     <br />

     <span>이름 : </span>
     <input 
        type="text" 
        name='name'
        value={info.name} 
        onChange={e => {inputInfo(e)}}
     />
     <br />

     <span>이메일 : </span>
     <input 
        type="text" 
        name='email'
        value={info.email} 
        onChange={e => {inputInfo(e)}}
     />
     <br />

     <button 
        type='button' 
        onClick={e => {console.log(info)}}
     >
      가입하기</button>
    </>
   
  )
}

export default Test13

// 흐름
// 1. state가 실행되고
// 2. id에 1을 입력
// 3. return으로 화면에 그림을 그리기 시작
// 4. input 태그에서 첫번째 칸 id 찾아가
// 5. onChange 발생으로 이벤트 객체 e를 생성하고 inputInfo 실행
// 6. inputInfo 안 setInfo 함수 실행
// 7. ...info로 기존 객체 복사
// 8. e.target.name 으로 키 결정 -> e.target.name 으로 키 결정 : e.target.name이 'id'이니까 id 키에 e.target.value로 값 저장
// 9. 새로운 info 객체 생성
// 10. 같은 키에 새로운 value값 있으면 최신 value값으로 저장
// 11. 리렌더링해서 처음부터 다시 실행
// 12. state는 무시하고 return문에서 아이디 1 화면에 출력