import axios from "axios";

/* 한 상품 조회하는 axios 요청 함수*/
export const selectOneData = async ({itemNo}) => {
  try{
    const response =  await axios.get(`http://localhost:8080/items/${itemNo}`);
    return response;
  }catch(e){
    alert('어이쿠 한 상품 조회하는데 실패했네?!!')
    console.log(e);
  }
}