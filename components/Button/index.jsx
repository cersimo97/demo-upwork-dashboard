import clsx from 'clsx'
import React from 'react'
import styles from './Button.module.css'

function Button({ variant, text, ...props }) {
  return (
    <button className={clsx(styles.button, styles[variant])} {...props}>
      {text}
    </button>
  )
}

export default Button
