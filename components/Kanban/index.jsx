import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import Button from '../Button'
import styles from './Kanban.module.css'
import influencerProfileImage from '../../public/influencer.png'
import Column from './Column'
import InfluencerItem from '../InfluencerItem'
import FormInput from '../FormInput'
import InputSelect from '../InputSelect'
import MaxMinInput from '../MaxMinInput'
import InputCheckbox from '../InputCheckbox'
import { nanoid } from 'nanoid'

const influencersIdentified = [
  {
    image: influencerProfileImage,
    username: 'Username',
    count: '1.5k',
    city: 'Heart Disease',
    country: 'Swizerland',
    id: nanoid(),
  },
  {
    image: influencerProfileImage,
    username: 'Username',
    count: '1.5k',
    city: 'Heart Disease',
    country: 'Swizerland',
    id: nanoid(),
  },
  {
    image: influencerProfileImage,
    username: 'Username',
    count: '1.5k',
    city: 'Heart Disease',
    country: 'Swizerland',
    id: nanoid(),
  },
  {
    image: influencerProfileImage,
    username: 'Username',
    count: '1.5k',
    city: 'Heart Disease',
    country: 'Swizerland',
    id: nanoid(),
  },
  {
    image: influencerProfileImage,
    username: 'Username',
    count: '1.5k',
    city: 'Heart Disease',
    country: 'Swizerland',
    id: nanoid(),
  },
  {
    image: influencerProfileImage,
    username: 'Username',
    count: '1.5k',
    city: 'Heart Disease',
    country: 'Swizerland',
    id: nanoid(),
  },
  {
    image: influencerProfileImage,
    username: 'Username',
    count: '1.5k',
    city: 'Heart Disease',
    country: 'Swizerland',
    id: nanoid(),
  },
]
const influencersContacted = [
  {
    image: influencerProfileImage,
    username: 'Username',
    count: '1.5k',
    city: 'Heart Disease',
    country: 'Swizerland',
    id: nanoid(),
  },
  {
    image: influencerProfileImage,
    username: 'Username',
    count: '1.5k',
    city: 'Heart Disease',
    country: 'Swizerland',
    id: nanoid(),
  },
  {
    image: influencerProfileImage,
    username: 'Username',
    count: '1.5k',
    city: 'Heart Disease',
    country: 'Swizerland',
    id: nanoid(),
  },
  {
    image: influencerProfileImage,
    username: 'Username',
    count: '1.5k',
    city: 'Heart Disease',
    country: 'Swizerland',
    id: nanoid(),
  },
  {
    image: influencerProfileImage,
    username: 'Username',
    count: '1.5k',
    city: 'Heart Disease',
    country: 'Swizerland',
    id: nanoid(),
  },
  {
    image: influencerProfileImage,
    username: 'Username',
    count: '1.5k',
    city: 'Heart Disease',
    country: 'Swizerland',
    id: nanoid(),
  },
  {
    image: influencerProfileImage,
    username: 'Username',
    count: '1.5k',
    city: 'Heart Disease',
    country: 'Swizerland',
    id: nanoid(),
  },
]
const influencersRegistered = [
  {
    image: influencerProfileImage,
    username: 'Username',
    count: '1.5k',
    city: 'Heart Disease',
    country: 'Swizerland',
    id: nanoid(),
  },
  {
    image: influencerProfileImage,
    username: 'Username',
    count: '1.5k',
    city: 'Heart Disease',
    country: 'Swizerland',
    id: nanoid(),
  },
  {
    image: influencerProfileImage,
    username: 'Username',
    count: '1.5k',
    city: 'Heart Disease',
    country: 'Swizerland',
    id: nanoid(),
  },
  {
    image: influencerProfileImage,
    username: 'Username',
    count: '1.5k',
    city: 'Heart Disease',
    country: 'Swizerland',
    id: nanoid(),
  },
  {
    image: influencerProfileImage,
    username: 'Username',
    count: '1.5k',
    city: 'Heart Disease',
    country: 'Swizerland',
    id: nanoid(),
  },
  {
    image: influencerProfileImage,
    username: 'Username',
    count: '1.5k',
    city: 'Heart Disease',
    country: 'Swizerland',
    id: nanoid(),
  },
  {
    image: influencerProfileImage,
    username: 'Username',
    count: '1.5k',
    city: 'Heart Disease',
    country: 'Swizerland',
    id: nanoid(),
  },
]

function Kanban() {
  const [showFilters, setShowFilters] = React.useState(false)

  const handleFilterClick = () => {
    setShowFilters(!showFilters)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h6 className={styles.title}>All Influencers</h6>
          <p className={styles.subtitle}>More than 290+ new Influencers</p>
        </div>
        <div className={styles.headerButtons}>
          <Button variant="primary" text="Add new Influencer" />
          <Button variant="secondary" text="Export Report" />
          <Button
            variant={showFilters ? 'outlineActive' : 'outline'}
            text="Filters"
            onClick={handleFilterClick}
          />
        </div>
      </div>
      {showFilters && (
        <div id="filters">
          <form>
            <div className={styles.filtersContainer}>
              <FormInput label="Platform">
                <InputSelect />
              </FormInput>
              <FormInput label="Disease Area">
                <InputSelect />
              </FormInput>
              <FormInput label="Location">
                <InputSelect />
              </FormInput>
              <FormInput label="Followers">
                <MaxMinInput />
              </FormInput>
              <FormInput label="Age">
                <MaxMinInput />
              </FormInput>
              <FormInput label="Status">
                <MaxMinInput />
              </FormInput>
              <FormInput label="Add Label">
                <InputSelect />
              </FormInput>
              <InputCheckbox label="Only those with task" />
            </div>
            <div className={styles.formSubmitButtons}>
              <Button variant="secondary" text="Clear all filters" />
              <Button variant="primary" text="Filter" />
            </div>
          </form>
        </div>
      )}
      <DragDropContext>
        <div className={styles.content}>
          <Column title="Identified" value={89670} droppableId="identified">
            {influencersIdentified.map((inf, ind) => (
              <InfluencerItem
                {...inf}
                key={ind}
                draggableId={inf.id}
                index={ind}
              />
            ))}
          </Column>
          <Column title="Contacted" value={96707} droppableId="contacted">
            {influencersContacted.map((inf, ind) => (
              <InfluencerItem
                {...inf}
                key={ind}
                draggableId={inf.id}
                index={ind}
              />
            ))}
          </Column>
          <Column title="Registered" value={67034} droppableId="registered">
            {influencersRegistered.map((inf, ind) => (
              <InfluencerItem
                {...inf}
                key={ind}
                draggableId={inf.id}
                index={ind}
              />
            ))}
          </Column>
        </div>
      </DragDropContext>
    </div>
  )
}

export default Kanban
