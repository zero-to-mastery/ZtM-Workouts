import Head from './head'
import Link from 'next/link'

const Nav = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link href="/">
                        <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                        <a className="nav-link">HTML</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link">CSS</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link">JavaScript</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link">React</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link">NodeJS</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link">Databases</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link">Testing</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link">Deployment</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
);

export default Nav
