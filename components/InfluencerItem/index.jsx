import Image from 'next/image'
import React from 'react'
import styles from './InfluencerItem.module.css'
import instagramLogo from '../../public/instagramLogo.png'
import mapPin from '../../public/mapPin.png'
import { Draggable } from 'react-beautiful-dnd'

function InfluencerItem({ image, username, count, city, country, ...props }) {
  return (
    <Draggable {...props}>
      {(provided, snapshot) => (
        <div
          className={styles.container}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Image src={image} height={37} width={37} alt="Profile image" />
          <div style={{ flex: 1 }}>
            <p className={styles.primaryText}>{username}</p>
            <div className={styles.flex}>
              <Image
                src={instagramLogo}
                style={{ marginRight: '0.5rem' }}
                alt="Instagram logo"
              />
              <p className={styles.secondaryText}>{count}</p>
            </div>
          </div>
          <div>
            <p className={styles.primaryText}>{city}</p>
            <div className={styles.flex}>
              <Image
                src={mapPin}
                style={{ marginRight: '0.5rem' }}
                alt="Map pin logo"
              />
              <p className={styles.secondaryText}>{country}</p>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default InfluencerItem
