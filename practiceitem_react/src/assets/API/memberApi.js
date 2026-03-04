/* 회원과 관련된 api 모음집*/

import axios from "axios"

/**
 * 로그인 api
 */
export const selectLogin = async (loginData) => {
  try{
    const response = await axios.get('http://localhost:8080/mems', {params : {
      memId : loginData.memId,
      memPw : loginData.memPw
    }})
    return response;
  }catch(e){
    alert('로그인 실패했습니다.')
    console.log('로그인 중 오류 발생', e)
  }
}