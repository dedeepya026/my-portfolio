import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Link as ScrollLink } from 'react-scroll';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const { hero } = portfolioData;

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      paddingTop: '80px'
    }}>
      {/* Background Gradient Blob */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '300px',
        height: '300px',
        backgroundColor: 'var(--primary)',
        filter: 'blur(150px)',
        opacity: 0.2,
        zIndex: -1
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '400px',
        height: '400px',
        backgroundColor: 'var(--accent)',
        filter: 'blur(150px)',
        opacity: 0.15,
        zIndex: -1
      }}></div>

      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap-reverse',
        gap: '4rem'
      }}>

        {/* Text Content (Left) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: '1', minWidth: '300px', textAlign: 'left' }}
        >
          <h2 className="gradient-text" style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '500' }}>
            Hello, I'm
          </h2>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: '700',
            marginBottom: '1rem',
            lineHeight: 1.1,
            color: 'var(--text-primary)'
          }}>
            {hero.name}
          </h1>
          <h3 style={{ fontSize: '2rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            {hero.title}
          </h3>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-tertiary)', marginBottom: '2.5rem', maxWidth: '600px' }}>
            {hero.description}
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem' }}>
            {hero.socials.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1.8rem',
                  transition: 'color 0.2s, transform 0.2s'
                }}
                onMouseOver={(e) => { e.currentTarget.style.color = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <social.icon />
              </a>
            ))}
          </div>

          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            style={{
              display: 'inline-block',
              padding: '1rem 2.5rem',
              background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
              color: 'white',
              borderRadius: '50px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 15px var(--primary-glow)',
              transition: 'transform 0.2s'
            }}
          >
            Check Out My Work
          </ScrollLink>
        </motion.div>

        {/* Profile Photo (Right) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ flex: '1', display: 'flex', justifyContent: 'center', minWidth: '300px' }}
        >
          <div style={{
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--primary), var(--accent))',
            padding: '6px',
            boxShadow: '0 0 30px var(--primary-glow)'
          }}>
            <img
              src={profileImg}
              alt="Profile"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
                backgroundColor: 'var(--bg-secondary)',
              }}
            />
          </div>
        </motion.div>

      </div>
      <style>{`
        @media (max-width: 900px) {
          .container {
            flex-direction: column-reverse !important;
            text-align: center !important;
          }
           #hero .container > div {
             text-align: center !important; 
             align-items: center !important;
           }
           #hero .container h1, #hero .container h2, #hero .container h3, #hero .container p {
             margin-left: auto; 
             margin-right: auto;
           }
           #hero .container div[style*="flex"] { 
             justify-content: center !important; 
           }
        }
      `}</style>
    </section>
  );
};

export default Hero;
