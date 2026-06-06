import{Award, Users, Clock, MapPin} from 'lucide-react';
import aboutImg from "../about.jpg";
function About(){
    return(
        <section className='about' id='about'>
            <div className='about-content'>
                {/*left*/}
                <div className='about-image' data-aos="fade-right">
                    <img src={aboutImg} alt="Physio Nord"/>
                    </div>
                    {/*right*/}
                <div className='about-text' data-aos="fade-left">
                <p className='about-label'>A Propos de Nous</p>
                <h2>
                    Un Centre Moderne au Service de Votre Santé
                </h2>
                <p>Le Centre Physio Nord est un établissement spécialisé en kinésithérapie et rééducation fonctionnelle situé au cœur de Tétouan.
                    <br/>Notre équipe de professionnels qualifiés s'engage à vous offrir des soins personnalisés et de qualité. Nous utilisons des techniques modernes et des équipements de pointe pour assurer votre rétablissement dans les meilleures conditions.</p>

                {/*stats right*/}
                <div className='about-stats'>
                    <div className='stat'>
                        <Award size={28}/>
                        <h3>+10 Ans</h3>
                        <p>D'éxperience</p>
                    </div>
                    <div className='stat'>
                        <Users size={28}/>
                        <h3>+1000</h3>
                        <p>Patients traités</p>
                    </div>
                    <div className='stat'>
                        <Clock size={28}/>
                        <h3>6j/7</h3>
                        <p>Disponibilité</p>
                    </div>
                    <div className='stat'>
                        <MapPin size={28}/>
                        <h3>Tetouan</h3>
                        <p>Maroc</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}
export default About;