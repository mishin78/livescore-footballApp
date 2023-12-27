const getYesterdayDate = () => {
    let today = new Date();

    // Set the time zone offset to UTC+0
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());

    // Subtract one day in milliseconds (24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
    let yesterday = new Date(today.getTime() - 86400000); // 86400000 milliseconds in a day
    //console.log(yesterday)
    // Now 'yesterday' contains the UTC date object for yesterday
    const ISOSstring = yesterday.toISOString()
    //console.log(ISOSstring)
    const res = String(ISOSstring).slice(0,10)
    //console.log(res)
    return res
}

export default getYesterdayDate