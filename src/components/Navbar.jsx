import{Phone} from 'lucide-react';
import logo from '../logophysio.png'
function Navbar(){
    return(
        <nav className="navbar">
            <div className='navbar-logo'>
                <img src={logo} alt='Physio Nord' className='logo-img'/>
                <h1>Physio<span>Nord</span></h1>
            </div>

            <ul className="navbar-links">
                <li><a href='#services'>Services</a></li>
                <li><a href='#about'>A Propos</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className='navbar-phone'>
                <Phone size={16} />
                <span>+212 600300965</span>
            </div>
        </nav>
    )
}

export default Navbar;