import './styles.css'

function ContactForm() {
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        
        const formData = new FormData(e.target);

        let response;
        try {
            response = await fetch(e.target.action, {
                method: e.target.method,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(formData).toString()
            });
        } catch (error) {
            console.log(error);
            alert('Error sending message');
        }

        if (response.status === 200) {
            alert('Message sent successfully');
            e.target.reset();
        } else {
            alert('Error sending message');
        }
    }

    return (
        <form 
            onSubmit={handleSubmit}
            id="contact-form" 
            name="simple-contact-form" 
            acceptCharset='UTF-8'
            action="http://localhost:5000/api/contact" 
            method="POST" >
            <fieldset id="contact-form-inputs" >
                <div className="form-group">
                    <label htmlFor="full-name">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="full-name" 
                        placeholder="John Doe"
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="email-address">E-mail</label>
                    <input
                        type="email"
                        name="email_replyto"
                        id="email-address"
                        placeholder="email@domain.tld"
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
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
                    name="subject"
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