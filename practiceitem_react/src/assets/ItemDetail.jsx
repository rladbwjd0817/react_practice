import React, { useEffect, useState } from 'react'
import styles from './ItemDetail.module.css'
import { selectOneData } from './API/itemApi'
import { useParams } from 'react-router-dom'

/* 상품 상세 페이지 */

const ItemDetail = () => {
  /* url params로 itemNo뽑아쓰기 */
  const {itemNo} = useParams();

  /* 1개의 상품 상세 조회한 데이터를 저장할 state 변수 */
  const [oneItem, setOneItem] = useState({})

  console.log(oneItem);

  /* 마운트되었을 때 상제정보 화면에 출력 */
  useEffect(() => {
    getOneItem();
  }, [])

  /* axios 조회를 실행하는 함수 */
  const getOneItem = async (itemNo) => {
    const response = await selectOneData(itemNo);
    setOneItem(response.data);
  }

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
              <td>{}</td>
              <td>등록자</td>
              <td>x</td>
              <td>가격</td>
              <td>x</td>
            </tr>
            <tr>
              <td>x</td>
              <td colSpan={5}>s</td>
            </tr>
            <tr>
              <td>x</td>
              <td colSpan={5}>s</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        {/* 목록가기, 삭제 버튼 */}
        <button type='button'>목록가기</button>
        <button type='button'>삭제</button>
      </div>
    </div>
  )
}

export default ItemDetail