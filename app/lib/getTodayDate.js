const getTodayDate = () => {
    let today = new Date();

    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());

    let yesterday = new Date(today.getTime()); 
    const ISOSstring = yesterday.toISOString()
    //console.log(ISOSstring)
    const res = String(ISOSstring).slice(0,10)
    //console.log(res)
    return res
}

export default getTodayDate