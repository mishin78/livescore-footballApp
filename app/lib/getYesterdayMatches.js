import getYesterdayDate from './getYesterday'

export default async function yesterdayMatches() {
    const yesterday = getYesterdayDate()
    const baseUrl = `http://livescore-api.com/api-client/scores/history.json?key=ZYOCZXSKGQ93bsne&secret=nUG6Kign3fEKCi8BgXegV60CXaF8D2n0&from=${yesterday}&to=${yesterday}`
    let allData = []

    async function fetchPage(url) {
        const res = await fetch(url, { next: { revalidate: 60 } })
        const data = await res.json()

        if (data.success) {
            allData = allData.concat(data.data.match)
            
            if (data.data.next_page) await fetchPage(data.data.next_page)
        }
    }

    await fetchPage(baseUrl)

    return allData
}
