import React from "react"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"
const ListLink = props => (
    <Link to={props.to}>{props.children}</Link>
)
export default ({ children }) => (
    <div>
        <Helmet>
            <title>Nick Neyland</title>
            <link rel="canonical" href="https://nickneyland.com" />
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
           <p>&copy; <span id="year"></span> Nick Neyland</p>
           <ul>
                <li><a href="https://github.com/nickneyland" target="_blank" rel="noopener noreferrer">Github</a></li>
                <li><a href="https://twitter.com/nickneyland" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
        </footer>
        <Helmet>
            <script src={withPrefix('script.js')} type="text/javascript" />
        </Helmet>
    </div>
)