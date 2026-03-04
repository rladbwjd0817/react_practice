import React, { useState } from 'react'
import Input from '../compononet/Input'
import { selectLogin } from './API/memberApi';
import { useNavigate, useParams } from 'react-router-dom';

const Login = () => {
  const params = useParams();
  const nav = useNavigate();

  /* 로그인 정보를 저장할 state 변수 */
  const [loginData, setLoginData] = useState({
    memId : '',
    memPw : ''
  });

  console.log('로그인 정보 -', loginData)

  /* input값 변경시 저장할 함수 */
  const handleLoginData = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name] : e.target.value
    })
  }

  /* 로그인 버튼 클릭시 로그인 실행함수 */
  const getLogin = async () => {
    /* 1. 서버로 id/pw 전송 */
    const response = await selectLogin(loginData);
    console.log(response.data);
    setLoginData(response.data);
    /* 2. 로그인 성공하면 */
    if(response){
      /* 3. sessionStorage에 회원정보 저장 */
      sessionStorage.setItem('memNo', response.data.memNo);
      sessionStorage.setItem('memId', response.data.memId);
      sessionStorage.setItem('memName', response.data.memName);
      
      alert('로그인 성공!!');
      nav('/')
    }
  };

  return (
    <div>
      <div>
        <Input 
          placeholder='id를 입력하세요.'
          name='memId'
          value={loginData.memId}
          onChange={e => {handleLoginData(e)}}
        />
        <Input 
          type='password'
          placeholder='pw를 입력하세요.'
          name='memPw'
          value={loginData.memPw}
          onChange={e => {handleLoginData(e)}}
        />
      </div>
      <div>
        <button
          type='button'
          onClick={e => {getLogin()}}
        >
          로그인
        </button>
      </div>
    </div>
  )
}

export default Login