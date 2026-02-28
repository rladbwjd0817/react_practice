import React from 'react'
import styles from './Input.module.css'

const Input = ({
  type = 'text',
  ...props
}) => {
  return (
    <div>
      <input 
        className={styles.input}
        type={type} 
        {...props}
      />
    </div>
  )
}

export default Input