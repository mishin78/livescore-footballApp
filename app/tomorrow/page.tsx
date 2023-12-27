import tomorrowMatches from '@/app/lib/getTomorrowMatches'
import sortByCompetition from '../lib/sortByCompetition'
import getTimeZone from '../lib/getTimeZone'
import './styles.sass'



export default async function Tomorrow() {
    const data = await tomorrowMatches()
    const sortedYesterdayMatches = await data.sort((a:any, b:any) => a.competition_id - b.competition_id)
    const matches = sortByCompetition(sortedYesterdayMatches)
    //console.log(matches)

    return (
        <div>
            <div className='yesterdayBox'>
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
                                    <p>{getTimeZone(j.time)}</p>
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