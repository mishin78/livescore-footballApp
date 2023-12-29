export default async function liveMatches() {
    const baseUrl = `https://livescore-api.com/api-client/matches/live.json?&key=ZYOCZXSKGQ93bsne&secret=nUG6Kign3fEKCi8BgXegV60CXaF8D2n0`
    let allData = []

    async function fetchPage(url) {
        const res = await fetch(url, { cache: 'no-store' })
        const data = await res.json()

        if (data.success) {
            allData = allData.concat(data.data.match)
            
            if (data.data.next_page) await fetchPage(data.data.next_page)
        }
    }

    await fetchPage(baseUrl)

    return allData
}


//, { next: { revalidate: 60 } }