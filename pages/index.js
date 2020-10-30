import styles from '../styles/Home.module.css'
import HeaderComponent from '../components/Header' 
export default function Home() {
  return (
    <div className={styles.container}>
      <HeaderComponent/>
    </div>
  )
}
