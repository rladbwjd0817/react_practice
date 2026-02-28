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

  /*  전체 체크박스 체크여부 저장할 state 변수 */
  const [isChecked, setIsChecked] = useState(true);

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
      console.log('itemNoArr -', itemNoArr )
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

  /* 체크박스 컨트롤 함수 */
  const handleCheckbox = (e) => {
    const updated = [...itemNoList, Number(e.target.value)];
    /* 체크가 되었을 때 */
    if(e.target.checked){
      setItemNoList(updated)
      /* 전부 체크됐으면 전체 체크박스도 true */
      setIsChecked(updated.length === itemList.length);
    }
    /* 체크 해제 되었을 때 */
    else{
      setItemNoList(itemNoList.filter(each => each !== Number(e.target.value)))
      /* 하나라도 해제되면 전체 체크 해제 */
      setIsChecked(false);
    }
    console.log('itemNoList - ', itemNoList)
  }
  

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
                  checked={isChecked}
                  onChange={e => {
                    setIsChecked(e.target.checked)
                    if(e.target.checked){
                      setItemNoList(itemList.map(each => each.itemNo))
                    }
                    else{
                      setItemNoList([])
                    }
                  }}
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
                        checked={itemNoList.includes(item.itemNo)}
                        value={item.itemNo}
                        onChange={e => handleCheckbox(e)}
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
/* 흐름 정리 */
/* /* 흐름 정리 */
/* 1. state변수들 생성
2. 리턴문 그림 그려서 화면에 출력
	-> 전체 체크박스는 초기값이 true, itemNoList초기값은 빈 배열
	 -> 개별 체크박스는 itemNoList.includes( )로 판단하기 때문에 실제로는 아무것도 체크 안된 상태로 출력
3. 첫번째 useEffect에서 마운트되어  상품목록 조회 getItemList함수 호출
	-> getItemList함수 안 selectItemList함수 호출
	-> 스프링에게  조회  api 요청 
	-> itemList에 통신성공시 전달받은 데이터 중 내가 필요한 데이터만 뽑아서 예약저장
	-> itemNoArr 배열 생성
	-> 반복문으로 itemNoArr에 상품번호 저장
	-> itemNoList에 itemNoArr배열에 저장된 상품번호를 예약 저장 
	-> 콘솔에 itemNoArr 값 출력
	-> 두번째 useEffect에서 getTotlaPrice함수 호출 , selectItemList와 무관하게 itemList state변수의 값이 변경될 때 자동으로 실행
	-> sum 변수에 초기값 0 생성
	->  반복문으로 sum에 itemList배열에서 뽑은 하나의 데이터가 저장된 e에서 itemCnt와 itemPrice의 값을 곱한 값을 저장
	-> setTotalPrice state변경함수의 매개변수에 sum 값을 전달하여 TotalPrice state 변수에 sum 값을 예약저장
	-> 콘솔에 totalPrice값 출력
	-> 리렌더링
	-> itemNoList에 itemNoArr 배열 저장, TotalPrice에 sum값 변경되지 않고 저장된 채로 유지
4. 리터문 다시 그림
	-> itemList에 데이터가 저장되어 있어 상품정보들 map으로 반복 돌려 화면에 출력됨
5. 전체 체크박스 해제 -> onChange실행
	-> setIsChecked state 변경함수 호출, 매개변수로 이벤트가 발생된 태그의 checked값을 isChcecked  state 변수에 예약 저장
	-> if문 실행 : 만약 e.target.checked가 true면 setItemNoList 변경함수를 호출하여 itemList 배열을 map반복을 돌려 하나씩 꺼낸 데이터를 each에 저장하고 each에서 itemNo를 꺼낸 것을 itemList에 예약저장 / 아니라면 itemNoList에는 빈 배열로 예약저장

6. 개별 체크박스 해제 -> onChange 실행
	-> handleCheckbox 함수 호출
	-> updated 변수에 배열형태로 새로운 itemNoList와 이벤트가 발생한 태그의 value 값을 숫자로 변환하여 저장
	-> if문 실행 : 만약 e.target.checked가 true면 setItemNoList 변경함수를 호출하여 매개변수로 updated 값을 예약저장하고, setIsChecked state 변경함수를 호출하여 updated 변수에 저장된 배열의 길이와 itemList에 저장된 배열의 길이가 같은지 비교하여 같으면 true를 isChecked에 그 값을 예약 저장 / 체크 해제 되었으면 setItemNoList 변경함수에 itemNoList에 filter함수를 사용하여 itemNoList에서 뽑은 하나의 데이터들을 each에 저장하여 each가 숫자로 변환된 이벤트가 발생한 태그의 value값과 다른것을 걸러냄
하나라도 해제되면 setIsChecked state 변경함수를 호출하여 false값을 주어 전체 체크 해제 시킴
 */