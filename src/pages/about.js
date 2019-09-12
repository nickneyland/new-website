import React from "react"
import Layout from "../components/layout"
import nick from "../components/images/nick.jpg"
export default () => (
    <Layout>
        <div className="container">
            <p>I grew up on the south-east coast of England and now live in Brooklyn, NY.</p>
            <p>Currently I live in Clinton Hill with my wife, son, daughter, and a small cat.</p>
            <img src={nick} alt="pic of nick" />
        </div>
    </Layout>
)