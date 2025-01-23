import { NavLink } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import '../Styles/navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-content">
                <NavLink to="/" className="nav-brand">
                    <FaGithub className="brand-icon" />
                    <span>GitApp</span>
                </NavLink>

                <div className="nav-links">
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar