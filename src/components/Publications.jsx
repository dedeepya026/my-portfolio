import { portfolioData } from '../data/portfolio';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Publications = () => {
    // If no publications, don't render section
    if (!portfolioData.publications) return null;

    return (
        <section id="publications" className="section container">
            <h2 className="section-title">Publications</h2>
            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {portfolioData.publications.map((pub, index) => (
                    <div key={index} className="glass" style={{ padding: '1.5rem', borderRadius: '1rem' }}>
                        {/* Title - Plain text */}
                        <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                            {pub.name}
                        </h3>

                        {/* Link - Hyperlink with text "IEEE Link" */}
                        <a href={pub.link} target="_blank" rel="noopener noreferrer" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '1rem',
                            fontSize: '0.9rem',
                            color: 'var(--primary)',
                            fontWeight: '500',
                            textDecoration: 'none',
                            border: '1px solid var(--primary)',
                            padding: '0.4rem 1rem',
                            borderRadius: '50px',
                            transition: 'all 0.2s ease'
                        }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--primary)';
                                e.currentTarget.style.color = 'white';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = 'var(--primary)';
                            }}
                        >
                            IEEE Link <FaExternalLinkAlt style={{ fontSize: '0.8rem' }} />
                        </a>

                        <p style={{ color: 'var(--text-secondary)' }}>{pub.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Publications;
