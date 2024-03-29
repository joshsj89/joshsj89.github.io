import styles from './ContactForm.module.css';
import ContactSuccessModal from './ContactSuccessModal';
import { BaseSyntheticEvent, useState } from 'react';

function ContactForm() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalSuccess, setIsModalSuccess] = useState(false);

    const handleSubmit = async (e: BaseSyntheticEvent) => {
        e.preventDefault(); 
        
        const formData = new FormData(e.target);
        let params: string[][] = [];
        for (const pair of formData.entries()) {
            params.push([pair[0], pair[1].toString()]);
        }
        
        try {
            const response = await fetch(e.target.action, {
                method: e.target.method,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(params).toString()
            });

            if (response.status === 200) {
                setIsModalVisible(true);
                setIsModalSuccess(true);
                e.target.reset();
            } else {
                setIsModalVisible(true);
                setIsModalSuccess(false);
            }
    
            setTimeout(() => {
                setIsModalVisible(false);
            }, 3000);
        } catch (error) {
            console.log(error);
            alert('Error sending message');
        }
    }

    return (
        <div>
            <form 
                onSubmit={handleSubmit}
                id="contact-form" 
                name="simple-contact-form" 
                acceptCharset='UTF-8'
                action="https://joshsj89-1d7a9e7057c7.herokuapp.com/api/contact" 
                method="POST" >
                <fieldset id={styles['contact-form-inputs']} >
                    <div className={styles['form-group']}>
                        <label htmlFor="full-name">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="full-name" 
                            placeholder="John Doe"
                            required />
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="email-address">E-mail</label>
                        <input
                            type="email"
                            name="email_replyto"
                            id="email-address"
                            placeholder="email@domain.tld"
                            required />
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="message">Message</label>
                        <textarea
                            rows={5}
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
                    id={styles['submit-button']}
                    type="submit"
                    value="Submit" />
            </form>
            {isModalVisible && (<ContactSuccessModal success={isModalSuccess} />)}
        </div>
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