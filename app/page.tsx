import Link from 'next/link'
import './main-styles.sass'

export default function Home() {

  return (
    <main>
      <div>
          <div><Link href='/yesterday'>Yesterday</Link></div>
          <div><Link href='/yesterday'>Today</Link></div>
          <div><Link href='/yesterday'>Live</Link></div>
          <div><Link href='/tomorrow'>Tomorrow</Link></div>
      </div>
    </main>
  )
}
