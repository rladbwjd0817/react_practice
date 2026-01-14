import React, { useState } from 'react'

// 8. input에 이름을 입력하면 실시간으로 "안녕하세요, [이름]님!" 이 출력되는 컴포넌트를 만드세요.

const Test8 = () => {
  const [name, setName] = useState("");

  return (
    <>
      <input type="text" 
        placeholder= "이름을 입력하세요" 
        onChange={(e) => {
          setName(e.target.value);
        }} 
      />
      <h2>안녕하세요 {name}님!</h2>
    </>
  )
}

export default Test8

// onChange={(e) => {
          // setName(e.target.value);
        // }}
// => input에 뭔가 입력될 때마다, 그 입력값을 name에 저장해!

//  e : 이벤트가 발생하면 자동으로 만들어지는 객체
//  -> 어떤 요소에서 발생했는지, 
//     어떤 키를 눌렀는지, 
//     마우스 위치는 어디인지, 
//     input에 입력된 값은 무엇인지 등

// e.target : 이벤트가 발생한 html 요소 자체를 가리킴
// e.target.value : 그 input 태그에 입력된 값

// 위에 e.target, e.target.value 공부 더 해야 할 듯!