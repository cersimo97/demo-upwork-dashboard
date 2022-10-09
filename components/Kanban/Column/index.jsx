import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import styles from './Column.module.css'
import Pagination from '@mui/material/Pagination'

function Column({ children, title, value, ...props }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        {title}: <span className={styles.value}>{value}</span>
      </p>
      <Droppable {...props}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {children}
          </div>
        )}
      </Droppable>
      <Pagination count={32} variant="outlined" shape="rounded" />
    </div>
  )
}

export default Column
