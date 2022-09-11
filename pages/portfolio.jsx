import Link from "next/link"
import Navbar from "../components/Navbar"
import Head from "next/head"

function Portfolio() {
    return (
        <>
            <Head>
                <title>My Portfolio</title>
            </Head>

            <Navbar />

            <section className="hero">
                <div className="container">
                    <div className="text-wrapper w-full">
                        <h1 className="title">Portfolio</h1>
                        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                        <div className="portfolio-wrapper">
                            <div className="portfolio-item">
                                <img src="/ticketing.png" className="portfolio-image" />

                                <h4 className="portfolio-name">Ticketing Platform</h4>
                                <div className="portfolio-category">Mobile Dev</div>
                            </div>
                            <div className="portfolio-item">
                                <img src="/blockchain.jpeg" className="portfolio-image" />

                                <h4 className="portfolio-name">Blockchain</h4>
                                <div className="portfolio-category">Web Dev</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio