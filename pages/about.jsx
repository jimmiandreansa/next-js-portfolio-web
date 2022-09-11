import Link from "next/link"
import Navbar from "../components/Navbar"
import Head from "next/head"

function About() {
    return (
        <>
            <Head>
                <title>About Me</title>
            </Head>

            <Navbar />

            <section className="hero">
                <div className="container">
                    <div className="text-wrapper w-full">
                        <h1 className="title">About</h1>
                        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat labore fugit molestiae alias odit consequatur odio tempora adipisci voluptas vero, ea dolorum atque deserunt eligendi mollitia ab sequi magnam et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eos natus soluta tempore eligendi, nesciunt mollitia quis commodi consequuntur voluptate quisquam aperiam quam ipsam ullam nam perspiciatis expedita delectus illum facere reprehenderit dolorem ad? Suscipit aut aperiam quod sint quia eos dolor voluptates inventore, distinctio laboriosam qui animi cupiditate ratione!</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About