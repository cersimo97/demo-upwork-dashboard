import SocialCard from '../components/SocialCard'
import styles from '../styles/Home.module.css'
import instagramLogo from '../public/instagram.png'
import youtubeLogo from '../public/youtube.png'
import tiktokLogo from '../public/tiktok.png'
import Agenda from '../components/Agenda'
import Kanban from '../components/Kanban'
import { resetServerContext } from 'react-beautiful-dnd'

const socialCardsData = [
  {
    title: 'Instagram',
    image: instagramLogo,
    value: '9,89670',
    subValue: 'Influencers since last month',
  },
  {
    title: 'Youtube',
    image: youtubeLogo,
    value: '9,89670',
    subValue: 'Influencers since last month',
  },
  {
    title: 'Tiktok',
    image: tiktokLogo,
    value: '9,89670',
    subValue: 'Influencers since last month',
  },
]

export default function Home() {
  return (
    <>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <div>
          <div className={styles.socialCardsContainer}>
            {socialCardsData.map(sc => (
              <SocialCard key={sc.title} {...sc} />
            ))}
          </div>
          <Kanban />
        </div>
        <Agenda />
      </div>
    </>
  )
}

export const getServerSideProps = async ({ query }) => {
  resetServerContext() // <-- CALL RESET SERVER CONTEXT, SERVER SIDE

  return { props: { data: [] } }
}
