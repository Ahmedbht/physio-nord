import { ChevronDown} from "lucide-react";
import heroVideo from "../hero-video.mp4"; 


function Hero(){
    return(
        <section className="hero" id="home">
            <video className="hero-video" autoPlay muted loop playsInline>
                <source src={heroVideo} type="video/mp4"/>
            </video>

            <div className="hero-overlay"></div>

            {/*content*/}
            <div className="hero-content">
                <p className="hero-subtitle">Bienvenue</p>
                <h1>Centre de Rééducation<br/>& Kinésitherapie</h1>
                <p className="hero-description">Des soins professionnels de kinésithérapie et de rééducation à Tétouan. Nous vous aidons à récupérer plus vite et à vivre mieux.</p>

                <div className="hero-buttons">
                    <a href="#contact " className="btn-primary">Prendre Rendez-vous</a>
                    <a href="#services" className="btn-secondary">Nos services</a>
                </div>
            </div>

            <div className="hero-scrol">
                <ChevronDown size={16}/>
            </div>
        </section>
    )



}
export default Hero;