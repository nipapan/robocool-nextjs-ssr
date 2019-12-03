import React from 'react'
import Link from 'next/link'
import {prefixPath} from '../next.config'

const links = [
   { href: '/', label: 'Home', needPrefix: true },
   { href: '/robots', label: 'Robots', needPrefix: true },
   { href: '/about', label: 'About', needPrefix: true },
   { href: 'https://github.com/nipapan/robocool-next-ssr', label: 'GitHub', as: 'https://github.com/nipapan/robocool-next-ssr', needPrefix: false },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav className='nav-row'>
    <ul>
      {links.map(({ key, href, label, needPrefix }) => (
        <li key={key}>
          <Link href={href} as={needPrefix? prefixPath + `${href}` : `${href}`}>
             <a>{label}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: larger;
        margin: 10px;
      }
      a:hover {
        color: #3c3c3c;
      }
      .nav-row {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
    `}</style>
  </nav>
)

export default Nav
