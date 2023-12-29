import getTodayDate from '@/app/lib/getTodayDate'

export default async function getTodayMatches() {
    const today = getTodayDate()
    const baseUrl = `https://livescore-api.com/api-client/fixtures/matches.json?&key=ZYOCZXSKGQ93bsne&secret=nUG6Kign3fEKCi8BgXegV60CXaF8D2n0&date=${today}`
    let allData = []

    async function fetchPage(url) {
        const res = await fetch(url, { next: { revalidate: 60 } })
        const data = await res.json()

        if (data.success) {
            allData = allData.concat(data.data.fixtures)
            
            if (data.data.next_page) await fetchPage(data.data.next_page)
        }
    }

    await fetchPage(baseUrl)

    return allData
}