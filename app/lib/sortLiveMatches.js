import d from '@/app/lib/data'
import formatDate from '@/app/lib/formatDate'

const sortLiveMatches = (matchesArray) => {
    const outputArray = matchesArray.reduce((accumulator, currentMatch) => {
        let competition = accumulator.find(comp => comp.id === currentMatch.competition.id)
        


        if (!competition) {
            competition = {
                id: currentMatch.competition.id,
                name: currentMatch.competition.name,
                c: d.get(String(currentMatch.competition.id)),
                date: formatDate(currentMatch.added.slice(0,10)),
                matches: []
            };
            accumulator.push(competition)
        }
    
        competition.matches.push({...currentMatch})
    
        return accumulator
    }, []);
    return outputArray
}


export default sortLiveMatches