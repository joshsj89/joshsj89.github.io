import ContactForm from './ContactForm';

function ContactPage() {
    return (
        <div className={`page {styles['contact-page']}`}>
            <h1>Contact Me</h1>
            <ContactForm />
        </div>
    );
}

export default ContactPage;