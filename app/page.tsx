import Image from 'next/image'
import styles from './page.module.css'
import Test0 from './components/test1Api/test1Api'


export default function Home() {

  return (
    <main className={styles.main}>
      <h1>Test</h1>
		<Test0 />
    </main>
  )
}
