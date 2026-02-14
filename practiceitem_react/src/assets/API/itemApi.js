/* item과 관련된 모든 api 모음집 */

import axios from "axios";

/**
 * 상품 상세 조회api
 * @param {integer} itemNo 상품번호 
 * @returns 
 */
export const goDetailData = async (itemNo) => {
  try{
    const response = await axios.get(`http://localhost:8080/items/${itemNo}`);
    return response;
  }catch(e){
    console.log('상세 조회 api 오류 발생', e);
  }
}


export const goDelete = async (itemNo) => {
  try{
    const response = await axios.delete(`http://localhost:8080/items/${itemNo}`);
    return response;
  }catch(e){
    console.log('삭제 api 요청 중 오류 발생', e)
  }
}
