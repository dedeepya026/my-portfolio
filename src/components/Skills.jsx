import { portfolioData } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="section container">
      <h2 className="section-title">Technical Skills</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {portfolioData.skills.map((categoryGroup, index) => (
          <div key={index} style={{ animationDelay: `${index * 0.1}s` }} className="animate-fade-in">
            <h3 style={{
              color: 'var(--accent)',
              fontSize: '1.3rem',
              marginBottom: '1rem',
              textAlign: 'center',
              fontWeight: '600'
            }}>
              {categoryGroup.category}
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center'
            }}>
              {categoryGroup.items.map((skill, idx) => (
                <div key={idx} className="glass" style={{
                  padding: '0.8rem 1.5rem',
                  borderRadius: '2rem',
                  fontSize: '1rem',
                  color: 'var(--text-primary)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.boxShadow = '0 5px 15px var(--primary-glow)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
