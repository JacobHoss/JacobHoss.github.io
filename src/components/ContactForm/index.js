import React from 'react';

function ContactForm() {
    const send = () => {
        setTimeout(() => {
            window.open("mailto:jacobhenryhoss2@gmail.com?subject=From " + document.getElementById("name").value + ": " + document.getElementById("subject").value + "&body=" + document.getElementById("message").value);
        }, 320);
    }
    return (
        <>
        <div className="page-bg"></div>
        <div className="hero is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="columns is-8">
                        <div className="column is-two-thirds has-text-left">
                            <div className="social-media">
                                <a href="https://github.com/JacobHoss" target="_blank" className="button is-light is-large"><i
                                        className="fa fa-github" aria-hidden="true"></i></a>
                                <a href="https://www.linkedin.com/in/jacob-hoss-00b431139" target="_blank"
                                    className="button is-light is-large"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className="column is-one-third has-text-left box">
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input id="name" className="input is-medium" type="text" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Subject</label>
                                <div className="control">
                                    <input id="subject" className="input is-medium" type="text" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Message</label>
                                <div className="control">
                                    <textarea id="message" className="textarea is-medium"></textarea>
                                </div>
                            </div>
                            <div className="control">
                                <button type="submit" id="send" onClick={send}
                                    className="button is-link is-fullwidth has-text-weight-medium is-medium">Send
                                    Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ContactForm;