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
                  fontWeight: '500',
                  backgroundColor: 'rgba(255,255,255,0.8)', // Slightly more opaque for better contrast
                  border: '2px solid var(--primary)', // Solid colored outline by default
                  boxShadow: '0 2px 10px rgba(139, 92, 246, 0.1)', // Subtle glow
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.backgroundColor = 'var(--primary)';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.boxShadow = '0 5px 20px var(--primary-glow)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.8)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.boxShadow = '0 2px 10px rgba(139, 92, 246, 0.1)';
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
