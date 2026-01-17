import React, { useState } from 'react'

const Test14 = () => {
// 다음 요구사항대로 상품 등록 폼을 만드세요.
// 요구사항:
// 입력 항목: 상품명(productName), 가격(price), 카테고리(category), 재고수량(stock)
// "등록하기" 버튼 클릭 시:
// console에 전체 상품 정보 출력
// 추가: alert로 "상품이 등록되었습니다!" 메시지 표시
// "초기화" 버튼 추가:
// 모든 input을 빈 값으로 초기화

  const [product, setProduct] = useState({
    productName : '',
    price : '',
    category : '',
    stock : ''
  });

  //상품등록
  const setNewProduct = e => {
    setProduct({
      ...product,
      [e.target.name] : e.target.value
    })
  }

  //상품초기화
  const setResetProduct = () => {
    setProduct({
      productName: '',
      price : '',
      category : '',
      stock : ''
    })
  }

  return (
    <>
      상품명
      <input 
        type="text"
        name='productName'
        value={product.productName}
        onChange={e => {setNewProduct(e)}}
      />
      <br />
      가격
      <input 
        type="number"
        name='price'
        value={product.price}
        onChange={e => {setNewProduct(e)}}
      />
      <br />
      카테고리
      <input 
        type="text"
        name='category'
        value={product.category}
        onChange={e => {setNewProduct(e)}}
      />
      <br />
      재고수량
      <input 
        type="number"
        name='stock'
        value={product.stock}
        onChange={e => {setNewProduct(e)}}
      />
      <br />

      <button 
        type='button'
        // name='등록하기'
        // value='entry'
        onClick={e => {
          !product.productName || !product.price || !product.category || !product.stock ? alert("모든 항목을 입력해주세요.") : alert("상품이 등록되었습니다.")
          console.log(product)
          
        }}
      >등록하기</button>

      <button 
        type='button'
        // name='초기화'
        // value='reset'
        onClick={e => {
          console.log(product)
          setResetProduct()
          
        }}
      >초기화</button>
    </>
  )
}

export default Test14