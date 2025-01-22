import { useState } from 'react'
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import '../Styles/contact.css'

type FormData = {
    name: string;
    email: string;
    message: string;
}

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted:', formData)
    }

    const teamMembers = [
        {
            name: 'Dilan EESHVARAN',
            role: 'Developer',
            github: 'https://github.com/dilaneeshvaran',
            linkedin: 'https://linkedin.com/in/dilaneeshvaran',
            email: 'dilan@example.com'
        },
        {
            name: 'Vincent TO',
            role: 'Developer',
            github: 'https://github.com/vincentto',
            linkedin: 'https://linkedin.com/in/vincentto',
            email: 'vincent@example.com'
        }
    ]

    return (
        <div className="contact-page">
            <h1>Contact Us</h1>

            <section className="contact-form-section">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                        />
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </section>

            <section className="team-section">
                <h2>Our Team</h2>
                <div className="team-grid">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="team-card">
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                            <div className="social-links">
                                <a href={member.github}><FaGithub /></a>
                                <a href={member.linkedin}><FaLinkedin /></a>
                                <a href={`mailto:${member.email}`}><FaEnvelope /></a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Contact