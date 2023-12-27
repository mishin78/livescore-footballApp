import './styles/nav.sass'
import Link from 'next/link'

const Navigation = () => {

    return (
        <header>
            <div>
                <p>Livescore</p>
            </div>
            <nav>
                <ul>
                    <li className='scoreTest'>Score</li>
                    <li>Betting</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation