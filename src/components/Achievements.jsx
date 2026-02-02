import { portfolioData } from '../data/portfolio';

const Achievements = () => {
    return (
        <section id="achievements" className="section container">
            <h2 className="section-title">Achievements</h2>
            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gap: '1.5rem' }}>
                {portfolioData.achievements.map((achievement) => (
                    <div key={achievement.id} className="glass" style={{
                        padding: '1.5rem',
                        borderRadius: '1rem',
                        borderLeft: '4px solid var(--primary)'
                    }}>
                        <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>{achievement.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', margin: '0.5rem 0' }}>{achievement.description}</p>
                        {achievement.link && (
                            <a href={achievement.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontSize: '0.9rem', display: 'block', margin: '0.5rem 0' }}>
                                View details
                            </a>
                        )}
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>{achievement.year}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
