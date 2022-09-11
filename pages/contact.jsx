import Link from "next/link"
import Navbar from "../components/Navbar"
import Head from "next/head"

function Contact() {
    return (
        <>
            <Head>
                <title>Contact Me</title>
            </Head>

            <Navbar />

            <section className="hero">
                <div className="container">
                    <div className="text-wrapper w-full">
                        <h1 className="title">Contact</h1>
                        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat labore fugit molestiae alias odit consequatur odio tempora adipisci voluptas vero, ea dolorum atque deserunt eligendi mollitia ab sequi magnam et.</p>
                        <ul className="contact-links">
                            <li className="contact-item">Email: jimmiandreansa11@gmail.com</li>
                            <li className="contact-item">Phone: +6282213189813</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact