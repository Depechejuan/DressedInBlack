import ContactCard from '../components/Contact-Card';
import ContactForm from '../forms/Contact-Form';


function contactUs() {

    return (
        <article className="contact-container">
            <ContactForm />
            <br />
            <ContactCard />
        </article>
    )
}

export default contactUs;