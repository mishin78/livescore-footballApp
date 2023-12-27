import d from '@/app/lib/data'
import formatDate from '@/app/lib/formatDate'

const sortTomorrowMatchesByCompetition = (matchesArray) => {
    const outputArray = matchesArray.reduce((accumulator, currentMatch) => {
        let com = accumulator.find(comp => comp.id === currentMatch.competition_id)
        let formatedDate = formatDate(currentMatch.date)
        
        if (!com) {
            com = {
                id: currentMatch.competition_id,
                name: currentMatch.competition.name,
                c: d.get(String(currentMatch.competition_id)),
                date: formatedDate,
                matches: []
            };
            accumulator.push(com)
        }
    
        com.matches.push({...currentMatch})
    
        return accumulator
    }, []);
    return outputArray
}


export default sortTomorrowMatchesByCompetition