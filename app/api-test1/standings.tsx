import './style.sass'

interface Team {
    id: number;
    crest: string;
    name: string;
  }
  
  interface StandingsData {
    standings: [{
      table: [{
        position: number;
        team: Team;
        playedGames: number;
        won: number;
        draw: number;
        lost: number;
        goalDifference: number;
        points: number;
      }];
    }];
  }

  interface RequestOptions extends RequestInit {
    headers: { [key: string]: string };
  }
  
async function getStandings(code: string): Promise<StandingsData> {
	const url: string = `https://api.football-data.org/v4/competitions/${code}/standings`
	const options: RequestOptions = { method: 'GET', headers: { 'X-Auth-Token': '0014e65e8fb4413dad4051cabc3a5f1e' }, cache: 'no-store'  }
	const response = await fetch(url, options )
	return response.json()
}


const Standings: React.FC<{ str: string }> = async ({ str }) => {
    const data = await getStandings(str)
    const table = await data.standings[0].table

    return (
        <div className="standings">
            <div className='headers'>
                <div className='club'>Club</div>
                <div className='stat'>Pl</div>
                <div className='stat'>W</div>
                <div className='stat'>D</div>
                <div className='stat'>L</div>
                <div className='stat'>GD</div>
                <div className='stat'>Pts</div>
            </div>
            {table.map(i => {
                return (
                    <div className='team' key={i.team.id}>
                        <div className='clubBox'>
                            <p>{i.position}</p>
                            <img alt='club emblem' src={i.team.crest} />
                            <p>{i.team.name}</p>
                        </div>
                        <p className='stat'>{i.playedGames}</p>
                        <p className='stat'>{i.won}</p>
                        <p className='stat'>{i.draw}</p>
                        <p className='stat'>{i.lost}</p>
                        <p className='stat'>{i.goalDifference}</p>
                        <p className='stat'>{i.points}</p>
                    </div>
                )
            })}


        </div>
    )
}


export default Standings