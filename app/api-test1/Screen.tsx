'use client'
import './style.sass'
import Standings from './standings'
import { useState } from 'react'

const Screen = ({ yData, tData, toData }) => {
    const [ isYOpen, setIsYOpen ] = useState(true)
    const [ isTodayOpen, setIsTodayOpen ] = useState(false)
    const [ isTomorrowOpen, setIsTomorrowOpen ] = useState(false)

    const open = (y: boolean, t: boolean, to: boolean) => {
        setIsYOpen(y)
        setIsTodayOpen(t)
        setIsTomorrowOpen(to)
    }

    

    return (
        <div className="box">
            <div className='buttons'>
                <button className={isYOpen ? 'choosen' : 'default'} onClick={() => open(true, false, false)}>Yesterday</button>
                <button className={isTodayOpen ? 'choosen' : 'default'} onClick={() => open(false, true, false)}>Today</button>
                <button className={isTomorrowOpen ? 'choosen' : 'default'} onClick={() => open(false, false, true)}>Tomorrow</button>
            </div>
            {isYOpen && yData.matches.map(i => {
                return (
                    <div key={i.id}>
                        <img alt="team emblem" src={i.homeTeam.crest} />
                        <p>{i.homeTeam.name} <span>{i.score.fullTime.home}</span> - <span>{i.score.fullTime.away}</span> {i.awayTeam.name}</p>
                        <img alt="team emblem" src={i.awayTeam.crest} />
                    </div>
                )
            })}

            {isTodayOpen && tData.matches.map(i => {
                return (
                    <div key={i.id}>
                        <img alt="team emblem" src={i.homeTeam.crest} />
                        <p>{i.homeTeam.name} <span>{i.score.fullTime.home}</span> - <span>{i.score.fullTime.away}</span> {i.awayTeam.name}</p>
                        <img alt="team emblem" src={i.awayTeam.crest} />
                    </div>
                )
            })}

            {isTomorrowOpen && toData.matches.map(i => {
                return (
                    <div key={i.id}>
                        <img alt="team emblem" src={i.homeTeam.crest} />
                        <p>{i.homeTeam.name} <span>{i.score.fullTime.home}</span> - <span>{i.score.fullTime.away}</span> {i.awayTeam.name}</p>
                        <img alt="team emblem" src={i.awayTeam.crest} />
                    </div>
                )
            })}

        </div>
    )
}

export default Screen