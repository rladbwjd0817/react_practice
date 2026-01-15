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
  console.log(info);


  const inputInfo = (e) => {
    setInfo({
      ...info,
      [e.target.id] : e.target.value
    })
  }

  return (
    <>
     <span>아이디 : </span>
     <input 
        type="text" 
        name='id'
        value={info.id} 
        onChange={(e) => {inputInfo(e)}
     }/> 
     <br />

     <span>비밀번호 : </span>
     <input 
        type="text" 
        name='pw'
        value={info.pw} 
        onChange={(e) => {inputInfo(e)}}
     />
     <br />

     <span>이름 : </span>
     <input 
        type="text" 
        name='name'
        value={info.name} 
        onChange={(e) => {inputInfo(e)}}
     />
     <br />

     <span>이메일 : </span>
     <input 
        type="text" 
        name='email'
        value={info.email} 
        onChange={(e) => {inputInfo(e)}}
     />
     <br />

     <button 
        type='button' 
        value={info} 
        onClick={() => {}}
     >
      가입하기</button>
    </>
   
  )
}

export default Test13