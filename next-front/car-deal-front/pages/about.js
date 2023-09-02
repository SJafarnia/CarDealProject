import AboutUs from '@/components/templates/AboutUs'
import Head from 'next/head'

function about() {
    return (
        <>
            <Head>
                <title>
                    About Us
                </title>
            </Head>
            <AboutUs />
        </>
    )
}

export default about