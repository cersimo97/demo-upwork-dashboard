import React from 'react'
import styles from './FormInput.module.css'

function FormInput({ label, children }) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      {children}
    </div>
  )
}

export default FormInput
