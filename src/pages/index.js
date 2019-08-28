import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import "../styles/main.scss"
const ListLink = props => (
    <Link to={props.to}>{props.children}</Link>
)
export default () => (
    <Layout>
        <div className="container">
            <p>Hello.</p>
            <p>My name is Nick.</p>
            <p>I am a web developer and former writer.</p>
            <p>You can see some of my coding work <ListLink to="/coding">here</ListLink>.</p>
            <p>You can see my work as a writer <ListLink to="/writing">here</ListLink>.</p>
        </div>
    </Layout>
)