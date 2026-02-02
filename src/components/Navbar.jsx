import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll'; // We might want smooth scroll for single page feel, but App.jsx used Router. 
// Wait, my App.jsx uses React Router. But a portfolio is often better as a single page with scroll.
// The user asked for "Contact me page" specifically. 
// Let's stick to Router for separate pages if intended, OR use HashLink.
// However, the `App.jsx` I wrote lays out all components in `main` on the index route.
// So it IS a single page application effectively.
// `Link` from `react-scroll` is best for this.
// But `Contact` was requested as a page.
// In my `App.jsx`, I put `<Contact />` at the bottom of the main page.
// I will use `react-scroll` for navigation.

import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Experience', to: 'experience' },
        { name: 'Education', to: 'education' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                background: scrolled ? 'var(--glass-bg)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
                padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
                transition: 'all 0.3s ease'
            }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <ScrollLink to="hero" smooth={true} duration={500} style={{ cursor: 'pointer', fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                    Portfolio<span style={{ color: 'var(--primary)' }}>.</span>
                </ScrollLink>

                {/* Desktop Menu */}
                <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }} className="desktop-menu">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <ScrollLink
                                to={link.to}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                style={{ cursor: 'pointer', color: 'var(--text-secondary)', fontWeight: '500', transition: 'color 0.2s' }}
                                activeClass="active-link"
                                spy={true}
                            >
                                {link.name}
                            </ScrollLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                <div className="mobile-toggle" style={{ display: 'none', cursor: 'pointer', fontSize: '1.5rem' }} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu Dropdown (Simplified inline styles for speed, better with CSS classes ideally) */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'var(--bg-secondary)',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    textAlign: 'center',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}>
                    {navLinks.map((link) => (
                        <ScrollLink
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            onClick={() => setIsOpen(false)}
                            style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}
                        >
                            {link.name}
                        </ScrollLink>
                    ))}
                </div>
            )}
            <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        .active-link { color: var(--primary) !important; }
      `}</style>
        </nav>
    );
};

export default Navbar;
