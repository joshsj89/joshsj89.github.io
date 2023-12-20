import ContactForm from './ContactForm';
import styles from './ContactPage.module.css';

function ContactPage() {
    return (
        <div className={`page ${styles['contact-page']}`}>
            <h1>Contact Me</h1>
            <ContactForm />
        </div>
    );
}

export default ContactPage;