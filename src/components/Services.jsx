import{Activity, Heart,Bone , Brain, Baby, Zap,Users, } from 'lucide-react';
import kine from "../kine.jpg"
import cardio from "../cardio.jpg";
import ortho from "../ortho.jpg";
import neuro from "../neuro.jpg";
import pediatric from "../pediatric.jpg";
import electro from "../electro.jpg";
import gerio from "../gerio.jpg";
import respiratoir from "../respiratoir.jpg";
function Services(){
    const services=[
       {
    id: 1,
    icon: <Activity size={36}/>,
    image: kine,
    title: "Rééducation Maxillo-faciale",
    description: "Prise en charge des troubles de la mâchoire et des muscles faciaux."
},
{
    id: 2,
    icon: <Heart size={36}/>,
    image: cardio,
    title: "Rééducation Neuro Vestibulaire",
    description: "Traitement des troubles de l'équilibre et des vertiges liés au système vestibulaire."
},
{
    id: 3,
    icon: <Bone size={36}/>,
    image: ortho,
    title: "Neuro-Réhabilitation Pédiatrique",
    description: "Rééducation neurologique spécialisée pour les enfants présentant des troubles moteurs."
},
{
    id: 4,
    icon: <Brain size={36}/>,
    image: neuro,
    title: "Kinésithérapie Médico-Sportive",
    description: "Prise en charge des blessures sportives et optimisation des performances athlétiques."
},
{
    id: 5,
    icon: <Baby size={36}/>,
    image: pediatric,
    title: "Rééducation Périnéale",
    description: "Rééducation du plancher pelvien pour traiter les troubles urinaires et post-partum."
},
{
    id: 6,
    icon: <Zap size={36}/>,
    image: electro,
    title: "Réadaptation Cardio-Respiratoire",
    description: "Programme de rééducation pour les pathologies cardiaques et respiratoires."
},
{
    id: 7,
    icon: <Users size={36}/>,
    image: gerio,
    title: "Gério-Kinésithérapie",
    description: "Soins adaptés aux personnes âgées pour maintenir leur autonomie et leur mobilité."
},
{
    id: 8,
    icon: <Heart size={36}/>,
    image: respiratoir,
    title: "Réadaptation Cardio-Respiratoire",
    description: "Programme de rééducation pour les patients souffrant de pathologies cardiaques et respiratoires."
},
    ];

    return(
        <section className="services" id='services'>
            <div className='section-header'>
                <h2>
                    Nos services
                </h2>
                <p>Des soins adaptés à chaque patient pour une récupération optimale</p>


            </div>
            <div className='services-grid'>
                {services.map((service)=>(
                    <div key={service.id} className='service-card' data-aos='fade-up'>
                        <div className='service-image'>
                            <img src={service.image} alt={service.title}/>
                            </div>
                        <div className='service-body'>
                            <div className='service-icon'>
                            {service.icon}
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        </div>
                        </div>
                   ))}
            </div>
        </section>
    );

}
export default Services;
