import Image from 'next/image'
import React from 'react'
import styles from './SocialCard.module.css'
import chartImage from '../../public/chart.png'

function SocialCard({ image, title, value, subValue }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image src={image} alt={`${title} logo`} />
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.valueContainer}>
        <p className={styles.value}>{value}</p>
        <Image src={chartImage} alt="Line chart img" />
      </div>
      <p className={styles.subValue}>{subValue}</p>
    </div>
  )
}

export default SocialCard
