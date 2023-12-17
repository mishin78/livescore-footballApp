import Screen from './Screen';
import './style.sass'
import Standings from './standings';
import Loading from './loading';

async function getData(day: string) {
	const url = `https://api.football-data.org/v4/matches?date=${day}`;
	const options = {
		method: 'GET',
		headers: {
			'X-Auth-Token': '0014e65e8fb4413dad4051cabc3a5f1e',
            cache: 'no-store' 
		}
	};
	
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		return result
	} catch (error) {
		console.error(error);
	}

}


const Api = async () => {
    const Ydata = await getData('YESTERDAY')
    const Tdata = await getData('TODAY')
    const TommorowData = await getData('TOMORROW')
    
    return (
        <div className='mainBox'>
            <Screen yData={Ydata} tData={Tdata} toData={TommorowData} />
            <Standings str={'DED'} />
            <Standings str={'BL1'} />
            <Standings str={'BSA'} />
            <Standings str={'PD'} />
            <Standings str={'FL1'} />
            <Standings str={'PL'} />
            <Standings str={'ELC'} />
            <Standings str={'PPL'} />
        </div>
    )
}

export default Api