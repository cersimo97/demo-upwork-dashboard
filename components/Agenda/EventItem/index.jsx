import React from 'react'
import styles from './EventItem.module.css'

function EventItem({ color, title, datetime }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        <span className={styles[color]} />
        {title}
      </p>
      <p className={styles.datetime}>{datetime}</p>
    </div>
  )
}

export default EventItem
