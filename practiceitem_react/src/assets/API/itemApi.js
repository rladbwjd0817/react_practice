import axios from "axios";

/* 한 상품 조회하는 axios 요청 함수*/
export const selectOneData = async (itemNo) => {
  try{
    const response =  await axios.get(`http://localhost:8080/items/${itemNo}`);
    return response;
  }catch(e){
    alert('어이쿠 한 상품 조회하는데 실패했네?!!')
    console.log(e);
  }
}

/* 상품 삭제하는 axios 요청 함수 */
export const delOne =  async (itemNo) => {
  try{
    const response = await axios.delete(`http://localhost:8080/items/${itemNo}`);
    return response;
  } catch(e){
    alert('상품 삭제 실패했는데 우짤래?!')
    console.log(e)
  }
}