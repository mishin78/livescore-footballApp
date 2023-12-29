'use client'
import Link from 'next/link'
import '@/app/styles/nav.sass' 

export default function Nav() {

    return (
        <div className='innerNav'>
            <Link href='/yesterday'><div className='linkBox'>
                <p>Yesterday</p>
            </div></Link>
            <Link href='/today'><div className='linkBox'>
                <p>Today</p>
            </div></Link>
            <Link href='/live'><div className='linkBox'>
                <p>Live</p>
            </div></Link>
            <Link href='/tomorrow'><div className='linkBox'>
                <p>Tomorrow</p>
            </div></Link>
        </div>
    )
}

