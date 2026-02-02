import { portfolioData } from '../data/portfolio';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    return (
        <section id="projects" className="section container">
            <h2 className="section-title">Projects</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {portfolioData.projects.map((project) => (
                    <div key={project.id} className="glass" style={{
                        padding: '2rem',
                        borderRadius: '1rem',
                        transition: 'transform 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>{project.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>{project.description}</p>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                            {project.techStack.map((tech, i) => (
                                <span key={i} style={{
                                    fontSize: '0.8rem',
                                    backgroundColor: 'var(--bg-tertiary)',
                                    padding: '4px 12px',
                                    borderRadius: '20px',
                                    color: 'var(--accent)'
                                }}>
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: 'var(--primary)',
                                fontWeight: '500'
                            }}>
                                <FaGithub /> View Code
                            </a>
                            {project.deployment && (
                                <a href={project.deployment} target="_blank" rel="noopener noreferrer" style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: 'var(--accent)',
                                    fontWeight: '500'
                                }}>
                                    <FaExternalLinkAlt /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
