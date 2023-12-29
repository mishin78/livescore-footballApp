'use client'
import Link from 'next/link'
import '@/app/styles/nav.sass' 
import { usePathname } from 'next/navigation'

export default function Nav() {
    const pathname = usePathname()

    return (
        <div className='innerNav'>
            <Link href='/yesterday'><div className={pathname === '/yesterday' ? "chosen" : "linkBox"}>
                <p>Yesterday</p>
            </div></Link>
            <Link href='/today'><div className={pathname === '/today' ? "chosen" : "linkBox"}>
                <p>Today</p>
            </div></Link>
            <Link href='/live'><div className={pathname === '/live' ? "chosen" : "linkBox"}>
                <p>Live</p>
            </div></Link>
            <Link href='/tomorrow'><div className={pathname === '/tomorrow' ? "chosen" : "linkBox"}>
                <p>Tomorrow</p>
            </div></Link>
        </div>
    )
}



