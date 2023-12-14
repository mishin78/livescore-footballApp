async function getData() {
    const url = 'https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=soccer&Timezone=-7';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c74e051aa8msh6d72226398a8e4dp1dbcecjsn6ea83806c53d',
            'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

const ApiTest2 = async () => {
    const data = getData()

    return (
        <div>
            <h1>A</h1>
        </div>
    )
}

export default ApiTest2