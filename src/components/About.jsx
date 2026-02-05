import { portfolioData } from '../data/portfolio';

const About = () => {
    return (
        <section id="about" className="section container">
            <h2 className="section-title">About Me</h2>
            <div className="glass" style={{ padding: '2rem', borderRadius: '1rem', maxWidth: '800px', margin: '0 auto' }}>
                {portfolioData.about.text.map((paragraph, index) => (
                    <p key={index} style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                        {paragraph}
                    </p>
                ))}
            </div>
        </section>
    );
};

export default About;
