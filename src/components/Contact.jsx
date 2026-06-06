import { Phone, MapPin, Clock, Mail } from 'lucide-react';
function Contact(){
    return (
        <section className='contact' id='contact'>
            <div className='section-header'>
                <h2>Contactez-nous</h2>
                <p>Prenez rendez-vous ou posez vos questions</p>
            </div>

            <div className='contact-content'>
                {/*left infos*/}
                <div className='contact-info' data-aos="fade-right">

                    <div className='contact-item'>
                        <div className='contact-icon'>
                            <Phone size={24} />
                        </div>
                        <div>
                            <h3>Téléphone</h3>
                            <p>+212 500300965</p>
                    </div>
                    </div>

                    <div className='contact-item'>
                        <div className='contact-icon'>
                            <MapPin size={24} />
                        </div>
                        <div>
                        <h3>Adresse</h3>
                        <p>Av Dakar residence EL JABLI - Tetouan</p>
                        </div>
                    </div>

                    <div className='contact-item'>
                        <div className='contact-icon'>
                            <Clock size={24} />
                        </div>
                        <div>
                            <h3>Horaires</h3>
                            <p>Lundi - Samedi: 8h - 20h</p>
                        </div>
                    </div>
                    <div className='contact-item'>
                        <div className='contact-icon'>
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3>Email</h3>
                            <p>contact@physionord.ma</p>
                        </div>
                    </div>
                </div>

                {/* form*/}
                <div className='contact-form' data-aos="fade-left">
                    <input type='text' placeholder='Votre nom' />
                    <input type='tel' placeholder='Votre telephone' />
                    <input type='text' placeholder='Service souhaité' />
                    <textarea placeholder='Votre message...' rows="4"></textarea>
                    <button className='btn-submit'>Envoyer</button>
                </div>
            </div>
        </section>
    );
}

export default Contact;