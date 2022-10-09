import React from 'react'
import Calendar from 'react-calendar'
import styles from './Agenda.module.css'
import EventItem from './EventItem'

const events = [
  {
    color: 'green',
    title: 'A connect with Minhas Asif',
    datetime: 'Oct,26,2022 | 04:00PM',
  },
  {
    color: 'purple',
    title: 'A connect with Ivan',
    datetime: 'Oct,26,2022 | 04:00PM',
  },
  {
    color: 'purple',
    title: 'A connect with Ivan',
    datetime: 'Oct,26,2022 | 04:00PM',
  },
  {
    color: 'purple',
    title: 'A connect with Ivan',
    datetime: 'Oct,26,2022 | 04:00PM',
  },
  {
    color: 'purple',
    title: 'A connect with Ivan',
    datetime: 'Oct,26,2022 | 04:00PM',
  },
]

function Agenda() {
  const [value, onChange] = React.useState()
  React.useEffect(() => {
    onChange(new Date())
  }, [])
  return (
    <div className={styles.container}>
      <Calendar onChange={onChange} value={value} />
      <div className={styles.notificationsContainer}>
        <h6 className={styles.sectionTitle}>Notifications</h6>
        <div className={styles.eventsContainer}>
          {events.map((e, i) => (
            <EventItem key={i} {...e} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Agenda
