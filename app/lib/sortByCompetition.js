import d from '@/app/lib/data'
import formatDate from '@/app/lib/formatDate'

const sortByCompetition = (matchesArray) => {
    const outputArray = matchesArray.reduce((accumulator, currentMatch) => {
        let competition = accumulator.find(comp => comp.id === currentMatch.competition_id)
        
        let formatedDate = formatDate(currentMatch.date)
        
        if (!competition) {
            competition = {
                id: currentMatch.competition_id,
                name: currentMatch.competition_name,
                c: d.get(String(currentMatch.competition_id)),
                date: formatedDate,
                matches: []
            };
            accumulator.push(competition)
        }
    
        competition.matches.push({...currentMatch})
    
        return accumulator
    }, []);
    return outputArray
}


export default sortByCompetition