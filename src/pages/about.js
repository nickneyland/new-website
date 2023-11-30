import React from "react"
import Layout from "../components/layout"
import nick from "../components/images/nick.jpg"

const aboutPage = () => (
    <Layout>
        <div className="container">
            <p>I grew up on the south-east coast of England and now live in Brooklyn, NY.</p>
            <p>I currently live in Clinton Hill and work as the CTO for <a href="https://essensepartners.com/" target="_blank" rel="noopener noreferrer">Essense Partners</a>.</p>
            <img src={nick} alt="pic of nick" />
        </div>
    </Layout>
)

export default aboutPage