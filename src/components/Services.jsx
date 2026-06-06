import{Activity, Heart,Bone , Brain, Baby, Zap} from 'lucide-react';
import kine from "../kine.jpg"
import cardio from "../cardio.jpg";
import ortho from "../ortho.jpg";
import neuro from "../neuro.jpg";
import pediatric from "../pediatric.jpg";
import electro from "../electro.jpg";

function Services(){
    const services=[
        {
            id: 1,
            icon: <Activity size={36}/>,
            image:kine,
            title:"Kinésithérapie",
            description: "Traitement des troubles musculosquelettiques par des techniques manuelles et des exercices thérapeutiques."
        },
        {
            id: 2,
            icon: <Heart size={36}/>,
            image:cardio,
            title:"Rééducation Cardiaque",
            description: "Programme de rééducation adapté aux patients souffrant de maladies cardiovasculaires."
        },
        {
            id: 3,
            icon: <Bone size={36}/>,
            image:ortho,
            title:"Rééducation Orthopédique",
            description: "Prise en charge des fractures, entorses et pathologies articulaires après chirurgie ou traumatisme."
        },
        {
            id: 4,
            icon: <Brain size={36}/>,
            image:neuro,
            title:"Rééducation Neurologique",
            description: "Accompagnement des patients atteints de pathologies neurologiques comme l'AVC."
        },
        {
            id: 5,
            icon: <Baby size={36}/>,
            image:pediatric,
            title:"Kinésithérapie Pédiatrique",
            description: "Soins spécialisés pour les enfants souffrant de troubles moteurs ou de retards de développement."
        },
        {
            id: 6,
            icon: <Zap size={36}/>,
            image:electro,
            title:"Électrothérapie",
            description: "Utilisation des courants électriques pour soulager la douleur et stimuler la récupération musculaire."
        }
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
