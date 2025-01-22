import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import '../Styles/footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-links">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub /> GitHub
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin /> LinkedIn
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter /> Twitter
                    </a>
                </div>

                <div className="team-section">
                    <p>Created by:</p>
                    <ul>
                        <li>
                            <a href="https://github.com/dilaneeshvaran">Dilan EESHVARAN</a>
                        </li>
                        <li>
                            <a href="https://github.com/vincentto">Vincent TO</a>
                        </li>
                        <li>
                            <a href="https://github.com/vincentto">Joel AKA</a>
                        </li>
                    </ul>
                </div>

                <div className="copyright">
                    <p>&copy; {new Date().getFullYear()} GitApp. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer