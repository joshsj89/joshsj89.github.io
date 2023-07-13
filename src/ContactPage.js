import ContactForm from './ContactForm';

function ContactPage(props) {
    return (
        <div className={`${props.className} contact-page`}>
            <h1>Contact Me</h1>
            <ContactForm />
        </div>
    );
}

export default ContactPage;