import Head from './head'
import Link from 'next/link'

const Nav = () => (
    <nav>
        <ul>
            <li>
                <Link prefetch href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link prefetch href="/">
                    <a>HTML</a>
                </Link>
            </li>
            <li>
                <Link prefetch href="/">
                    <a>CSS</a>
                </Link>
            </li>
            <li>
                <Link prefetch href="/">
                    <a>JS</a>
                </Link>
            </li>
            <li>
                <Link prefetch href="/">
                    <a>React</a>
                </Link>
            </li>
            <li>
                <Link prefetch href="/">
                    <a>NodeJS</a>
                </Link>
            </li>
            <li>
                <Link prefetch href="/">
                    <a>Testing</a>
                </Link>
            </li>
            <li>
                <Link prefetch href="/">
                    <a>Databases</a>
                </Link>
            </li>
            <li>
                <Link prefetch href="/">
                    <a>Deployment</a>
                </Link>
            </li>
        </ul>

        <style jsx>{`
      :global(body) {
        margin: 0;
        display:flex;
        flex-direction:row;
        height:100vh;
        background: radial-gradient(#555, #222);
        font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
      }
      nav {
      display:flex;
      flex-direction:column;
       height:100%;
      }
      ul {
        display: flex;
        justify-content: space-between;
        width:100%;
      }
      nav > ul {
        padding: 4px 16px;
        display:flex;
        flex-direction:column;
      }
      li {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 1em;
        width: 100%;
        background: #444;
        box-shadow: inset 1px -3px 11px 4px #333;
        transition: background 0.3s ease-in-out;
      }

      li:hover,li:focus {
        background:#333;
        cursor:pointer;
      }
      a {
        color: #d6d1d1;
        text-decoration: none;
        font-size: 13px;
        font-weight:bold;
      }
    `}</style>
    </nav>
)

export default Nav
