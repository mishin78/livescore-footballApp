import liveMatches from '@/app/lib/getLiveMatches'
import sortLiveMatches from '../lib/sortLiveMatches'
import getTimeZone from '../lib/getTimeZone'
import './styles.sass'

export default async function Today() {
    const data = await liveMatches()
    const sortedData = data.sort((a:any, b:any) => a.competition_id - b.competition_id).filter((i: any) => {
        return i.status === 'IN PLAY' || i.status === 'IN PLAY' || i.status === 'HALF TIME BREAK' || i.status === 'ADDED TIME'
    })
    const matches = sortLiveMatches(sortedData)
    //console.log(sortedData)


    return (
        <div>
            <div className='todayBox'>
            {matches.map((i: any) => (
                <div className='competitionBox' key={i.id}>
                    <div className='competititon'>
                        <div className='leaugeBox'>
                            <p>{i.c.country}{i.c.country && ':'}</p>
                            <p>{i.name}</p>
                        </div>
                        <div className='dateBox'>
                            <p>{i.date}</p>
                        </div>
                        {i.matches.map((j: any) => (
                            <div className='match' key={j.id}>
                                <div className='timeBox'>
                                    <p>{getTimeZone(j.scheduled) === '24:00' ? '00:00' : getTimeZone(j.scheduled)}</p>
                                    <p className='liveScore'>{j.time}{j.time !== 'HT' && <span className='liveIndicator'>&apos</span>}</p>
                                </div>
                                <p className='home'>{j.home.name}</p>
                                <p className='liveScore'>{j.scores.score}</p>
                                <p>{j.away.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        </div>
    )
}