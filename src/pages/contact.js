import React from "react"
import Layout from "../components/layout"

const contactPage = () => (
    <Layout>
        <div className="container">
        <form name="contact" method="post" data-netlify-recaptcha="true" netlify-honeypot="bot-field" data-netlify="true">
            <p>Contact me using the form below. Thanks!</p>
            <p className="hidden">
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>
            <p>
                <label><input type="text" name="name" placeholder="Name" /></label>   
            </p>
            <p>
                <label><input type="email" name="email" placeholder="Email" /></label>
            </p>
            <p>
                <label><textarea name="message" placeholder="Message"></textarea></label>
            </p>
            <p>  <div data-netlify-recaptcha="true"></div>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
            </form>
        </div>
    </Layout>
)

export default contactPage