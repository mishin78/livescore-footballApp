import TableBox from "../tournamentTable";

async function getData() {
	const url = 'https://football-web-pages1.p.rapidapi.com/league-table.json?comp=1&team=1';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'c74e051aa8msh6d72226398a8e4dp1dbcecjsn6ea83806c53d',
			'X-RapidAPI-Host': 'football-web-pages1.p.rapidapi.com'
		}
	};
	
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		//console.log(result)
		return result
	} catch (error) {
		console.error(error);
	}

}
 


export default async function Test0() {
	let information
	try {
		const data: any = await getData();
		const d = JSON.parse(data);
	
		if (d && d['league-table']) {
		  console.log(d);
		  information = d['league-table'].teams
		} else {
		  console.error("Свойство 'league-table' не определено в объекте d");
		}
	  } catch (error) {
		console.error("Произошла ошибка при обработке данных:", error);
	  }

  return (
    <main>
	  <TableBox info={information} />
    </main>
  )
}
