import styles from './ContactSuccessModal.module.css';

function ContactSuccessModal({ success }) {
    return (
        <div className={styles.modal} id="contactModal" tabIndex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
            <div className={styles['modal-content']}>
                <p>Message {success ? '' : 'not '} sent successfully.</p>
            </div>
        </div>
    );
}

export default ContactSuccessModal;