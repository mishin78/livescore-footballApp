import getTodayMatches from '@/app/lib/getTodayMatches'
import sortByCompetition from '../lib/sortByCompetition'
import getTimeZone from '../lib/getTimeZone'
import './styles.sass'

export default async function Today() {
    const data = await getTodayMatches()
    const sortedData = data.sort((a:any, b:any) => a.competition_id - b.competition_id)
    const matches = sortByCompetition(sortedData)
    //console.log(sortedData)

    return (
        <div>
            <div className='todayBox'>
            {matches.map((i: any) => (
                <div className='competitionBox' key={i.id}>
                    <div className='competititon'>
                        <div className='leaugeBox'>
                            <p>{i.c.country}{i.c.country && ':'}</p>
                            <p>{i.c.tournament}</p>
                        </div>
                        <div className='dateBox'>
                            <p>{i.date}</p>
                        </div>
                        {i.matches.map((j: any) => (
                            <div className='match' key={j.id}>
                                <div className='timeBox'>
                                    <p>{getTimeZone(j.time) === '24:00' ? '00:00' : getTimeZone(j.time)}</p>
                                </div>
                                <p className='home'>{j.home_name}</p>
                                <p>vs</p>
                                <p>{j.away_name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        </div>
    )
}