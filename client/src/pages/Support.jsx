import React, { Component } from 'react';
import * as emailjs from "emailjs-com";

export class Support extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            message: "",
            email: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_otfyzvb",
            "template_ut43azn",
            ".contact_form_class",
            "user_2ni6BnmJ5lWihDVy1RLLl"
        )
        .then()
        .catch();
        this.setState({
            name: "",
            message: "",
            email: "",
        });
    };
    render() {
        return (
            <div className="contCenter">
                <section className="contSection" >
                    <div className="contactComp">
                    <h1 className="projectSec">Do you need help?</h1>
                    <p>We are hear to help you with anything that you need to do to create your event! Just send us a quick message with you preferred email and we will reach out to you as soon as possible!</p>
                    <form
                        onSubmit={this.handleSubmit.bind(this)}
                        className="contact_form_class contactStyle"
                        id="contact-form"
                    >
                        <div className="contactDiv">
                            <input 
                                type="text"
                                id="name"
                                name="name"
                                size="30"
                                placeholder="What is your name?"
                                value={this.state.name}
                                onChange={this.handleChange.bind(this)}
                            ></input>
                        </div>
                        <div className="contactDiv">
                            <input 
                                type="text"
                                id="email"
                                name="email"
                                size="30"
                                placeholder="What is your email?"
                                value={this.state.email}
                                onChange={this.handleChange.bind(this)}
                            ></input>
                        </div>
                        <div className="contactDiv">
                            <textarea 
                                type="text"
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="What can we help you with?"
                                value={this.state.message}
                                onChange={this.handleChange.bind(this)}
                            ></textarea>
                        </div>
                    
                        <button className="submitBtn" type="submit">Submit</button>
                    </form>
                    </div>
                </section>
            </div>
        )
    }
}

export default Support;