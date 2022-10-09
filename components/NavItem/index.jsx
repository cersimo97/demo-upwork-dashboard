import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './navItem.module.css'

function NavItem({ active, image, title }) {
  return (
    <div className={active ? styles.activeContainer : styles.idleContainer}>
      <div className={styles.container}>
        <Image src={image} alt={`${title} icon`} />
        <Link href="" className={styles.title}>
          {title}
        </Link>
      </div>
    </div>
  )
}

export default NavItem
