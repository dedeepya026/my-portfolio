import { portfolioData } from '../data/portfolio';

const Experience = () => {
    if (!portfolioData.experience) return null;

    return (
        <section id="experience" className="section container">
            <h2 className="section-title">Work Experience</h2>
            <div className="experience-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {portfolioData.experience.map((exp, index) => (
                    <div key={index} className="glass" style={{
                        padding: '2rem',
                        borderRadius: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        borderLeft: '4px solid var(--primary)'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{exp.title}</h3>
                                <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', fontWeight: '500' }}>{exp.employer}</h4>
                            </div>
                            <span style={{
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                padding: '0.5rem 1rem',
                                borderRadius: '2rem',
                                fontSize: '0.9rem',
                                color: 'var(--text-secondary)',
                                whiteSpace: 'nowrap'
                            }}>
                                {exp.year}
                            </span>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
