import '../styles/globals.css'
import '../styles/Calendar.css'
import styles from '../styles/App.module.css'
import Image from 'next/image'
import logoImage from '../public/logo.png'
import NavItem from '../components/NavItem'
import dashboardIcon from '../public/QrCode.svg'
import discoverIcon from '../public/CirclesThreePlus.svg'
import influencersIcon from '../public/ApplePodcastsLogo.svg'
import clientsIcon from '../public/userSwitch.svg'
import campaignsIcon from '../public/Graph.svg'
import reportsIcon from '../public/ChartBar.svg'
import infoIcon from '../public/Info.png'
import bellIcon from '../public/BellSimple.png'
import influencerImage from '../public/influencer.png'
import chevronDown from '../public/chevron-down.png'

const navItems = [
  { title: 'Dashboard', active: false, more: false, image: dashboardIcon },
  { title: 'Discover', active: true, more: true, image: discoverIcon },
  { title: 'Influencers', active: false, more: false, image: influencersIcon },
  { title: 'Clients', active: false, more: false, image: clientsIcon },
  { title: 'Campaigns', active: false, more: false, image: campaignsIcon },
  { title: 'Reports', active: false, more: false, image: reportsIcon },
]

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className={styles.headerContainer}>
        <p className={styles.headerTitle}>Dashboard Overview</p>
        <div className={styles.headerRight}>
          <input
            className={styles.inputSearchHeader}
            type="search"
            placeholder="Looking for someone?"
          />
          <button className={styles.helpButtonHeader}>
            <Image src={infoIcon} alt="Info icon" />
            Help ?
          </button>
          <button className={styles.helpButtonHeader}>
            <Image src={bellIcon} alt="Bell icon" />
          </button>
          <button className={styles.helpButtonHeader}>
            <span>Minhas Asif</span>
            <Image
              src={influencerImage}
              alt="Asif profile image"
              style={{ borderRadius: 12 }}
            />
            <Image src={chevronDown} alt="chevron down" />
          </button>
        </div>
      </header>
      <main className={styles.main}>
        <aside className={styles.asideContainer}>
          <div className={styles.asideImageContainer}>
            <Image src={logoImage} alt="logo" />
          </div>
          <nav className={styles.navContainer}>
            {navItems.map(item => (
              <NavItem key={item.title} {...item} />
            ))}
          </nav>
        </aside>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
