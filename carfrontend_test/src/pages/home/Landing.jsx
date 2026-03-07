import React from 'react'
import styles from './Landing.module.css'

//////////* 접속 시 맨 처음 보여지는 화면 *//////////
const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.landing_img}>
        {/* 랜딩 배경 이미지 */}
        <img src="carshop_landing.png" />
      </div>
      <div className={styles.landing_car}>
        <img src="landing_car.png" />
      </div>
      <div className={styles.btn_div}>

      </div>
    </div>
  )
}

export default Landing