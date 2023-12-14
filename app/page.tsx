import styles from './page.module.css'
import Link from 'next/link'


export default function Home() {

  return (
    <main className={styles.main}>
      <h1>API`s for test</h1>
		  <div className='container'>
        <button style={{marginInline: '0.5rem'}}><Link href={'/api-test'}>ApiTest0</Link></button>
        <button style={{marginInline: '0.5rem'}}><Link href={'/api-test1'}>ApiTest1</Link></button>
        <button style={{marginInline: '0.5rem'}}><Link href={'/api-test2'}>ApiTest2</Link></button>
      </div>
    </main>
  )
}
