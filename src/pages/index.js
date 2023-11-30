import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import "../styles/main.scss"
const ListLink = props => (
    <Link to={props.to}>{props.children}</Link>
)
const homePage = () => (
    <Layout>
        <div className="container">
            <div id="typedtext">
                <h1>Hello.</h1> 
                <p>My name is Nick.</p>
                <p>I am a web developer and former writer.</p>
                <p>You can see some of my <ListLink to="/coding">coding work here</ListLink>.</p>
                <p>And you can see some of my <ListLink to="/writing">work as a writer here</ListLink>.</p>
            </div>
        </div>
    </Layout>
)

export default homePage