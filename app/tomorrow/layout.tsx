import Nav from "../components/innerNav"

export default function Layout({children}: any) {

    return (
        <main>
            <Nav/>
            {children}
        </main>
    )
}