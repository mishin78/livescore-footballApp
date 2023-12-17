import TableBox from "./tournamentTable";

async function getData(): Promise<string | undefined> {
	const url: string = 'https://football-web-pages1.p.rapidapi.com/league-table.json?comp=1&team=1';
	const options: RequestInit = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'c74e051aa8msh6d72226398a8e4dp1dbcecjsn6ea83806c53d',
			'X-RapidAPI-Host': 'football-web-pages1.p.rapidapi.com'
		},
		cache: 'no-store' 
	};
	
	try {
		const response: Response = await fetch(url, options);
		const result: string = await response.text();
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
