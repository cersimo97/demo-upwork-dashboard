import React from 'react'
import styles from './NumericInput.module.css'

function MaxMinInput() {
  return (
    <div className={styles.container}>
      <NumericInput text="Min" />
      <NumericInput text="Max" />
    </div>
  )
}

export default MaxMinInput

function NumericInput({ text }) {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch' }}
    >
      <span className={styles.label}>{text}</span>
      <input className={styles.input} type="number" />
    </div>
  )
}
