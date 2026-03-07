import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.css'
import Header from './Header'

const MainLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/* 헤더부분 */}
        <Header/>
    </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout