import { portfolioData } from '../data/portfolio';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="section container" style={{ marginBottom: '4rem' }}>
            <h2 className="section-title">Get In Touch</h2>
            <div className="glass" style={{
                maxWidth: '600px',
                margin: '0 auto',
                padding: '3rem',
                borderRadius: '1rem',
                textAlign: 'center'
            }}>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    I am currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                    <a href={`mailto:${portfolioData.contact.email}`} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        fontSize: '1.2rem',
                        color: 'var(--text-primary)',
                        padding: '1rem 2rem',
                        backgroundColor: 'var(--bg-tertiary)',
                        borderRadius: '50px',
                        transition: 'background-color 0.2s'
                    }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-glow)'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)'}
                    >
                        <FaEnvelope style={{ color: 'var(--accent)' }} /> {portfolioData.contact.email}
                    </a>

                    {portfolioData.contact.phone && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                            <FaPhone style={{ color: 'var(--primary)' }} /> {portfolioData.contact.phone}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
