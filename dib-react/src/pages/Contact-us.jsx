import logoContact from '../assets/logo/logo-contact.jpg';
import Youtube from '../assets/svg/youtube.svg';
import Facebook from '../assets/svg/facebook.svg';
import Twitter from '../assets/svg/twitter.svg';
import Instagram from '../assets/svg/instagram.svg';
import Email from '../assets/svg/gmail.svg';
import Whatsapp from '../assets/svg/whatsapp.svg';
import Phone from '../assets/svg/phone.svg';
import Tiktok from '../assets/svg/tiktok.svg';


function contactUs() {

    return (
        <article className="contact-card">
            <h3 className="contact-title">
                Dressed In Black
            </h3>
            <section className="contact-content">
                <figure className="band-image">
                    <img src={logoContact} />
                </figure>
                <div className="contact-info">
                    <h2>Juan León</h2>
                    <p>
                        <img className="icon phone-icon" src={Phone} />
                        /&nbsp;&nbsp;
                        <img className="icon phone-icon" src={Whatsapp} />
                        <a className="link-contact" href="tel:633127448">633127448</a>
                    </p>
                    <p>
                        <img  className="icon mail-icon" src={Email} /> <a className="link-contact"  href="mailto:email@gmail.com">dressedinblackdm@gmail.com</a>
                    </p>
                </div>
            </section>
                <div className="social-icons">
                    <a href="https://www.youtube.com/dressedinblackdm"><img src={Youtube} className="icon"/></a>
                    <a href="https://www.facebook.com/dressedinblackband"><img src={Facebook} className="icon"/></a>
                    <a href="https://www.instagram.com/dressedinblackdm"><img src={Instagram} className="icon"/></a>
                    <a href="https://www.tiktok.com/@dressedinblackdm"><img src={Tiktok} className="icon"/></a>

                </div>
        </article>
    )
}

export default contactUs;