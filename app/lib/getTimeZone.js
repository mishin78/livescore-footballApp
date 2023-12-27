
const getTimeZone = (time) => {

    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    
    const now = new Date()

    const utcDateTime = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), parseInt(time.split(":")[0]), parseInt(time.split(":")[1])))
    
    const userDateTime = utcDateTime.toLocaleTimeString('en-US', { timeZone: userTimeZone, hour12: false })
    
    return userDateTime.slice(0,5)
}


export default getTimeZone