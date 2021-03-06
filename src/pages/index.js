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
            <div id="typedtext">
            <h1>Hello. 
           	<span>My name is Nick.</span>
            <span>I am a web developer and former writer.</span>
            <span>You can see some of my <ListLink to="/coding">coding work here</ListLink>.</span>
            <span>And you can see some of my <ListLink to="/writing">work as a writer here</ListLink>.</span></h1></div>
        </div>
    </Layout>
)