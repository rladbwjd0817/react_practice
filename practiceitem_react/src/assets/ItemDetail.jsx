import React, { useEffect, useState } from 'react'
import styles from './ItemDetail.module.css'
import { delOne, selectOneData } from './API/itemApi'
import { useNavigate, useParams } from 'react-router-dom'

/* 상품 상세 페이지 */

const ItemDetail = () => {
  /* url params로 itemNo뽑아쓰기 */
  const {itemNo} = useParams();

  /* useNavigate로 페이지 이동 */
  const nav = useNavigate();

  /* 1개의 상품 상세 조회한 데이터를 저장할 state 변수 */
  const [oneItem, setOneItem] = useState({})

  console.log(oneItem);

  /* 마운트되었을 때 상제정보 화면에 출력 */
  useEffect(() => {
    getOneItem(itemNo);
  }, [itemNo])

  /* axios 조회를 실행하는 함수 */
  const getOneItem = async (itemNo) => {
    const response = await selectOneData(itemNo);
    setOneItem(response.data);
  }

  /* 상품 삭제 정보를 담을 state변수 */
  const[deleteData, setDeleteData] = useState({});

  /* 상품 삭제 실행하는 함수 */
  const goDelData = async (itemNo) => {
    const response = await delOne(itemNo);
    setDeleteData(response.data);
  }

  console.log(deleteData);


  return (
    <div >
      <div>
        {/* 상단 제목 */}
        <h2>상품 상세 정보 페이지</h2>
      </div>
      <div>
        {/* 상품 상세 정보 조회 테이블 */}
        <table className={styles.table_div}>
          <tbody >
            <tr>
              <td>등록일</td>
              <td>{oneItem.regdate}</td>
              <td>등록자</td>
              <td>{oneItem.regname}</td>
              <td>가격</td>
              <td>{oneItem.itemPrice}</td>
            </tr>
            <tr>
              <td>상품명</td>
              <td colSpan={5}>{oneItem.itemName}</td>
            </tr>
            <tr>
              <td>상품안내</td>
              <td colSpan={5}>{oneItem.itemIntro}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        {/* 목록가기, 삭제 버튼 */}
        <button 
          type='button'
          onClick={e => nav('/')}
        >목록가기</button>
        <button 
          type='button'
          onClick={e => {
            /* 삭제 axios 실행함수 */
            goDelData(itemNo);
            nav('/')
          }}
        >삭제</button>
      </div>
    </div>
  )
}

export default ItemDetail