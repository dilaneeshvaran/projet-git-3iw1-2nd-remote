import { FaGithub, FaCode, FaStar } from 'react-icons/fa'
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <header className="hero">
                <FaGithub className="hero-icon" />
                <h1>Welcome to GitApp</h1>
                <p>Your Ultimate GitHub Fan Experience</p>
            </header>

            <section className="features">
                <div className="feature-card">
                    <FaCode />
                    <h2>Open Source</h2>
                    <p>Discover millions of open source projects</p>
                </div>
                <div className="feature-card">
                    <h2>Collaboration</h2>
                    <p>Work together with developers worldwide</p>
                </div>
                <div className="feature-card">
                    <FaStar />
                    <h2>Star Projects</h2>
                    <p>Save your favorite repositories</p>
                </div>
            </section>

            <section className="popular-repos">
                <h2>Popular Repositories</h2>
                <div className="repo-grid">
                    {[
                        { name: 'react', stars: '200k+', description: 'A JavaScript library for building user interfaces' },
                        { name: 'vscode', stars: '150k+', description: 'Visual Studio Code' },
                        { name: 'tensorflow', stars: '175k+', description: 'An open source machine learning framework' }
                    ].map((repo) => (
                        <div key={repo.name} className="repo-card">
                            <h3>{repo.name}</h3>
                            <p>{repo.description}</p>
                            <span className="stars">⭐ {repo.stars}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="cta">
                <h2>Join the Community</h2>
                <button className="github-button">
                    <FaGithub /> Sign Up with GitHub
                </button>
            </section>
        </div>
    )
}

export default Home