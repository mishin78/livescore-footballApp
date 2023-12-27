import getYesterdayMathes from '@/app/lib/getYesterdayMatches'
import sortByCompetition from '@/app/lib/sortByCompetition'
import getTimeZone from '@/app/lib/getTimeZone'
import './styles.sass'

//TODO: Fetch all the pages
//      Style tables
//      Practise with postgresQl





export default async function Yesterday() {
    const yesterdayMatches = await getYesterdayMathes()
    const sortedYesterdayMatches = await yesterdayMatches.sort((a:any, b:any) => a.competition_id - b.competition_id)
    const matches = sortByCompetition(sortedYesterdayMatches)
    //console.log(matches[0].matches[0])

    return (
        <div className='yesterdayBox'>
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
                            <div className='match' key={j.fixture_id}>
                                <div className='timeBox'>
                                    <p>{getTimeZone(j.scheduled)}</p>
                                    <p>{j.time}</p>
                                </div>
                                <p className='home'>{j.home_name}</p>
                                <p className='score'>{j.score}</p>
                                <p>{j.away_name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}






