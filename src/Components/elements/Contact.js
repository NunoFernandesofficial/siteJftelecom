import React, {Component} from "react";
import "../css/Contact.css";
import axios from "axios";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";


class Contact extends Component {
	constructor(){
		super();

		this.state = {
			name: "",
			email: "",
			subject: "",
			message: "",
			sent:false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	
	}
	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	}

	async handleSubmit(e) {
		e.preventDefault();
		const {name, email, subject, message} = this.state;

		const form = await axios.post("/api/form", {
			name, 
			email,
			subject,
			message
		});
	}
	

 render() {
    return (
		
        <div className="contact-formm">
		     	<div className="contact1">	
				 <div className="back-home">
                    <a >
                <Link to="/">Voltar</Link>
                 </a>
                </div>
				<div className="container-contact1">
			<div className="contact1-pic js-tilt" data-tilt>

			</div>

			<form  className="contact1-form validate-form" onSubmit={this.handleSubmit} >
				<span className="contact1-form-title">
					Entre em contacto connosco
				</span>

				<div className="wrap-input1 validate-input" data-validate = "Name is required">
					<input className="input1" type="text" id="name" name="name" placeholder="Nome" value={this.state.name} onChange={this.handleChange}/>
					<span className="shadow-input1"></span>
				</div>

				<div className="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input className="input1" type="text" id="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
					<span className="shadow-input1"></span>
				</div>

				<div className="wrap-input1 validate-input" data-validate = "Subject is required">
					<input className="input1" type="text" id="subject" name="subject" placeholder="Assunto" value={this.state.subject} onChange={this.handleChange}/>
					<span className="shadow-input1"></span>
				</div>

				<div className="wrap-input1 validate-input" data-validate = "Message is required">
					<textarea className="input1" name="message" id="message" placeholder="Em que podemos ajudar?" value={this.state.message} onChange={this.handleChange}></textarea>
					<span className="shadow-input1"></span>
				</div>

				<div className="container-contact1-form-btn">
					<div className={this.state.sent ? "msg msgAppear": "msg"}></div>
					<button type="submit" id="submit" data-testid="button" className="contact1-form-btn" >
						<span>
							Enviar
							<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
						</span>
					</button>

				
				
				</div>
			</form>
		</div>
	</div>
            
        </div>
    );
	}
}

export default Contact;