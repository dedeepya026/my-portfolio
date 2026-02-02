import { portfolioData } from '../data/portfolio';

const Certifications = () => {
    if (!portfolioData.certifications) return null;

    return (
        <section id="certifications" className="section container">
            <h2 className="section-title">Certifications</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
                {portfolioData.certifications.map((cert) => (
                    <div key={cert.id} className="glass" style={{
                        padding: '1.5rem',
                        borderRadius: '1rem',
                        minWidth: '250px',
                        textAlign: 'center',
                        borderTop: '4px solid var(--accent)'
                    }}>
                        <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{cert.name}</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{cert.issuer}</p>
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{
                            color: 'var(--primary)',
                            fontWeight: '500',
                            fontSize: '0.9rem',
                            border: '1px solid var(--primary)',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            display: 'inline-block',
                            marginTop: 'auto'
                        }}>
                            View Certificate
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
