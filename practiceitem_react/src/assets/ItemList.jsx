import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './ItemList.module.css'

const ItemList = () => {
  /* 등록버튼 클릭 시 등록페이지로 이동할 useNavigate 생성 */
  const nav = useNavigate();

  /* 조회한 상품목록을 저장할 state 변수 */
  const [itemList, setItemList] = useState([]);

  /* 총 상품 금액 저장할 state 변수 */
  const [totalPrice, setTotalPrice] = useState(0);

  /* 선택한 체크박스 데이터들을 저장할 state 변수 */
  const [itemNoList, setItemNoList] = useState([]);

  /* 마운트 시 상품목록을 조회 */
  useEffect(() => {getItemList()}, []);

  /* 마운트 & itemList 값이 변경될 때마다 리렌더링 */
  useEffect(() => {getTotalPrice()}, [itemList])

  /* 상품목록 조회 api 요청 */
  const selectItemList = async () => {
    try{
      const response = await axios.get('http://localhost:8080/items');
      /* console.log(response.data); */
      setItemList(response.data);
      /* increaseCnt(); */

      /* itemNo 데이터들을 itemNoList에 저장 */
      const itemNoArr = [];
      for(const e of response.data){
        itemNoArr.push(e.itemNo);
      }
      setItemNoList(itemNoArr);
      /* 배열에 특정 데이터 있는지 검사 */
      const itemArrResult = itemNoList.includes(itemNoArr);
      
    }catch(e){
      console.log('상품 목록 조회 중 ')
    }
    
    
  }

  /* 상품 목록 조회 실행 함수 */
  const getItemList = () => {
    selectItemList();
    
  }
  
  
    

  /* 총 상품 금액 조회 함수 실행 */
  const getTotalPrice = () => {
    let sum = 0;
    for(const e of itemList){
    sum = sum + e.itemCnt * e.itemPrice
    }
    setTotalPrice(sum)
    console.log(totalPrice);
  }

  console.log('itemList -', itemList);

  
  

  return (
    <div className={styles.container}>
      <div>
        {/* 상단 제목 */}
        <h2>상품 목록</h2>
      </div>
      <div className={styles.table_div}>
        {/* 조회 목록 결과 테이블 */}
        <table>
          <thead className={styles.thead_div}>
            <tr>
              {/* No는 상품 등록번호임 */}
              <td>No</td>
              <td>
                <input 
                  type="checkbox" 
                  checked={true}
                />
              </td> 
              <td>상품명</td>
              <td>수량</td>
              <td>가격</td>
              <td>판매자</td>
              <td>등록일</td>
            </tr>
          </thead>
          <tbody className={styles.tbody_div}>
            {
              itemList.map((item, index) => {
                return(
                  <tr key={item.itemNo}>
                    <td>
                      {itemList.length - index  - 0}
                    </td>
                    <td>
                      <input 
                        type="checkbox" 
                        checked={true}
                      />
                    </td>
                    <td 
                      onClick={e => {nav(`/detail/${item.itemNo}`)}}
                    >{item.itemName}</td>
                    <td>{item.itemCnt}</td>
                    <td>{item.itemPrice.toLocaleString()}원</td>
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
        <p>총 상품 금액 : {totalPrice.toLocaleString()}원</p>
      </div>
      <div className={styles.btn_div}>
        {/* 등록버튼 -> 클릭 시 등록 페이지로 이동*/}
        <button 
          type='button'
          onClick={e => {
            nav('/reg')
          }}
        >상품 등록</button>
      </div>
    </div>
  )
 
}

export default ItemList