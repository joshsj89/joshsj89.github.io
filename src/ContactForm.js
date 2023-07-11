import './styles.css'

function ContactForm() {
    return (
        <form 
            id="contact-form" 
            name="simple-contact-form" 
            acceptCharset='UTF-8'
            action="https://formspree.io/f/xaygyber" 
            method="POST" >
            <fieldset id="contact-form-inputs" >
                <div className="form-group">
                    <label for="full-name">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="full-name" 
                        placeholder="John Doe"
                        required />
                </div>
                <div className="form-group">
                    <label for="email-address">E-mail</label>
                    <input
                        type="email"
                        name="_replyto"
                        id="email-address"
                        placeholder="email@domain.tld"
                        required />
                </div>
                <div className="form-group">
                    <label for="message">Message</label>
                    <textarea
                        rows="5"
                        name="message"
                        id="message"
                        placeholder="Your message here..."
                        required >
                    </textarea>
                </div>
                <input
                    type="hidden"
                    name="_subject"
                    id="email-subject"
                    value="Contact Form Submission" />
            </fieldset>
            <input
                id="submit-button"
                type="submit"
                value="Submit" />
        </form>
    );
}

export default ContactForm;

/*
import { useForm, ValidationError } from '@formspree/react';

function EmailForm() {
    const [state, handleSubmit] = useForm("xaygyber");

    if (state.succeeded) {
        return <p>Thanks for reaching out!</p>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">
                Email Address
            </label>
            <input
                id="email"
                type="email"
                name="email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
}

export default EmailForm;
*/