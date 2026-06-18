import { Phone, MapPin, Mail } from "lucide-react";
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h2>Physio<span>Nord</span></h2>
                    <p>Centre spécialisé en kinésithérapie et rééducation fonctionnelle à Tétouan, Maroc.</p>
                </div>
                <div className="footer-links">
                    <h3>Liens Rapides</h3>
                    <ul>
                    <li><a href="#home">Accueil</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">À Propos</a></li>
                    <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Contact</h3>
                    <p><Phone size={14} />+212 500300965</p>
                    <p><MapPin size={14} />Av Dakar residence EL JABLI - Tetouan</p>
                    <p><Mail size={14} />contact@physionord.ma</p>
                </div>

            </div>
            <div className="footer-bottom">
                <p>© 2026 PhysioNord. Tous droits réservés.</p>
            </div>
        </footer>
    );
}

export default Footer;