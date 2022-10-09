import React from 'react'
import styles from './InputSelect.module.css'

function InputSelect() {
  return (
    <select className={styles.container}>
      <option>--- Please select ---</option>
    </select>
  )
}

export default InputSelect
