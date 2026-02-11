import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ItemList = () => {
  /* 등록버튼 클릭 시 등록페이지로 이동할 useNavigate 생성 */
  const nav = useNavigate();

  /* 조회한 상품목록을 저장할 state 변수 */
  const [itemList, setItemList] = useState([]);

   /* No = cnt 값 증가하는 변수 생성 */
  /* const [cnt, setCnt] = useState(0); */

  /* cnt값 1씩 증가하는 함수 */
  /* const increaseCnt = () => {
    setCnt(cnt + 1);
  }  */

  /* 마운트 시 상품목록을 조회 */
  useEffect(() => {getItemList()}, []);

  /* 상품목록 조회 api 요청함수 */
  const getItemList = async () => {
    try{
      const response = await axios.get('http://localhost:8080/items');
      console.log(response.data);
      setItemList(response.data);
      /* increaseCnt(); */
    }catch(e){
      console.log('상품 목록 조회 중 ')
    }
  }

  
  console.log(itemList);

  return (
    <div>
      <div>
        {/* 상단 제목 */}
        <h2>상품 목록</h2>
      </div>
      <div>
        {/* 조회 목록 결과 테이블 */}
        <table>
          <thead>
            <tr>
              {/* No는 상품 등록번호임 */}
              <td>No</td> 
              <td>상품명</td>
              <td>가격</td>
              <td>판매자</td>
              <td>등록일</td>
            </tr>
          </thead>
          <tbody>
            {
              itemList.map((item, index) => {
                return(
                  <tr key={item.itemNo}>
                    <td>{item.itemNo}</td>
                    <td 
                      onClick={e => {nav('/detail')}}
                    >{item.itemName}</td>
                    <td>{item.itemPrice}</td>
                    <td>{item.regname}</td>
                    <td>{item.regdate}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <div>
        {/* 등록버튼 -> 클릭 시 등록 페이지로 이동*/}
        <button 
          type='button'
          onClick={e => {nav('/reg')}}
        >상품 등록</button>
      </div>
    </div>
  )
 
}

export default ItemList