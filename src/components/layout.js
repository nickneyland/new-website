import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"
const ListLink = props => (
    <Link to={props.to}>{props.children}</Link>
)
export default ({ children }) => (
    <div className="site">
        <Helmet>
            <title>Nick Neyland</title>
            <meta name="title" content="Nick Neyland" />
            <link rel="canonical" href="https://nickneyland.com" />
            <meta name="description" content="Personal website of web developer and writer Nick Neyland." />
        </Helmet>
        <header>
            <Link to="/">
                <h1>Nick Neyland</h1>
            </Link>
            <ul>
                <li><ListLink to="/about">About</ListLink></li>
                <li><ListLink to="/coding">Coding</ListLink></li>
                <li><ListLink to="/writing">Writing</ListLink></li>
                <li><ListLink to="/contact">Contact</ListLink></li>
            </ul>
        </header>
        {children}
        <footer>
            <ul className="left-footer">
                <li>Site built with <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">gatsby.js</a></li>
                <li>&copy; 2019 Nick Neyland</li>
            </ul>
            <ul className="right-footer">
                <li><a href="https://github.com/nickneyland" target="_blank" rel="noopener noreferrer">Github</a></li>
                <li><a href="https://twitter.com/nickneyland" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
        </footer>
    </div>
)