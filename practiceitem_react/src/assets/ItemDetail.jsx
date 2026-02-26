import React, { useEffect, useState } from 'react'
import { goDelete, goDetailData, } from './API/itemApi';
import { useNavigate, useParams } from 'react-router-dom';

/* 상품 상세조회 페이지 */

const ItemDetail = () => {
  /* !! url에 변수있으면 params 사용 !! */
  const {itemNo} = useParams();

  /* 해당 url의 페이지로 이동 */
  const nav = useNavigate();

  /* 상세조회한 데이터 저장할 state변수 */
  const [detailData, setDetailData] = useState({});
  
  /* 상세 조회 실행 함수 */
  const getDetailData = async () => {
    const response = await goDetailData(itemNo);
    setDetailData(response.data);
  }

  /* 상품 삭제 + 목록페이지 이동 실행 함수 */
  const handleDelete = async () => {
   const response = await goDelete(itemNo);
   nav('/');
  }
  
  /* 상세조회 페이지 마운트시 화면에 출력 */
  useEffect(() => {
    getDetailData();
  }, []);

  console.log('상세조회 - ', detailData)

  return (
    <div>
      <div>
        <h2>상품 상세 정보 페이지</h2>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>등록일</td>
              <td>{detailData.regdate}</td>
              <td>등록자</td>
              <td>{detailData.regname}</td>
              <td>가격</td>
              <td>{detailData.itemPrice}원</td>
              <td>수량</td>
              <td>{detailData.itemCnt}개</td>
            </tr>
            <tr>
              <td>상품명</td>
              <td colSpan={5}>{detailData.itemName}</td>
            </tr>
            <tr>
              <td>상품안내</td>
              <td colSpan={5}>{detailData.itemIntro}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <button 
          type='button'
          onClick={e => nav('/')}
        >목록가기</button>
        <button 
          type='button'
          onClick={e => {handleDelete()}}
        >삭제</button>
      </div>
    </div>
  )
}

export default ItemDetail