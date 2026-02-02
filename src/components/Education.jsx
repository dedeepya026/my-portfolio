import { portfolioData } from '../data/portfolio';

const Education = () => {
    return (
        <section id="education" className="section container">
            <h2 className="section-title">Education</h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {portfolioData.education.map((edu) => (
                    <div key={edu.id} className="glass" style={{ padding: '2rem', borderRadius: '1rem', marginBottom: '1.5rem', borderLeft: '4px solid var(--accent)' }}>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>{edu.school}</h3>
                        <p style={{ color: 'var(--primary)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{edu.degree}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                            <span>{edu.year}</span>
                            <span>{edu.grade}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
