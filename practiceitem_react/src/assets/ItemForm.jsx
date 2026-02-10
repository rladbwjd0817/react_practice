import axios from 'axios';
import React, { useEffect, useState } from 'react'

/* 상품목록 조회 페이지 */

const ItemForm = () => {
  /* input에 입력한 데이터 저장할 state 변수 */
  const [regItem, setRegItem] = useState({
    itemName : '',
    itemPrice : '',
    regname : '',
    itemIntro : ''
  });

  /* input의 값이 변경될 때마다(onChange) 실행할 함수 */
  const newItemData = (e) => {
    setRegItem({
      ...regItem,
      [e.target.name] : e.target.value
    })
  }

  console.log(regItem)

  /* axios 실행 함수  */
  const postItemData = async () => {
    try{
      const resposne = await axios.post('http://localhost:8080/items', regItem)
      return resposne.data;
    } catch(e){
      alert('아이쿠! 상품 등록 실패!')
      console.log(e)
    }
  }

   return (
    <div>
      <div>
        {/* 상단 제목 */}
        <h2>상품 등록</h2>
      </div>
      <div>
        {/* 등록 테이블 */}
        <table>
          <tbody>
            <tr>
              <td>상품명</td>
              <td>
                <input 
                  type="text" 
                  name='itemName'
                  value={regItem.itemName}
                  onChange={e => newItemData(e)}
                />
              </td>
            </tr>
            <tr>
              <td>가격</td>
              <td>
                <input 
                  type="text" 
                  name='itemPrice'
                  value={regItem.itemPrice}
                  onChange={e => newItemData(e)}
                />
              </td>
            </tr>
            <tr>
              <td>판매자</td>
              <td>
                <input 
                  type="text" 
                  name='regname'
                  value={regItem.regname}
                  onChange={e => newItemData(e)}
                />
              </td>
            </tr>
            <tr>
              <td>상품 설명</td>
              <td>
                <textarea 
                  name="itemIntro"
                  value={regItem.itemIntro}
                  onChange={e => newItemData(e)}
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        {/* 상품등록버튼 -> axios로 스프링에게 전달 */}
        <button 
          type='button'
          onClick={e => {
            postItemData()
            alert('상품 등록 성공!!')
          }}
        >상품 등록</button>
      </div>
    </div>
  )
}

export default ItemForm