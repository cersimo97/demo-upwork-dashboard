import React from 'react'
import styles from './InputCheckbox.module.css'

function InputCheckbox({ label }) {
  return (
    <label className={styles.container}>
      <input type="checkbox" /> {label}
    </label>
  )
}

export default InputCheckbox
