import Link from "next/link";
import { withRouter } from "next/router";

function Navbar({ router }) {
    const navs = [
        { id:1, text: 'Home', href: '/' },
        { id:2, text: 'About', href: '/about' },
        { id:3, text: 'Portfolio', href: '/portfolio' },
        { id:4, text: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="navbar">
            <div className="container">
                <Link href="/"><a className="logo">Andreansa.</a></Link>

                <ul className="nav-link">
                { navs.map(nav => {
                    return <li key={nav.id}><Link href={nav.href}><a className={`nav-item ${ router.pathname == nav.href ? 'active' : ''}`}>{nav.text}</a></Link></li>
                })}
                </ul>
            </div>
        </nav>
    )
};

export default withRouter(Navbar);