import ContactForm from './ContactForm';

function ContactPage(props) {
    return (
        <div className={`${props.className} contact-page`}>
            <ContactForm />
        </div>
    );
}

export default ContactPage;