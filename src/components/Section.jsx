export const Section = ({ id, title, children }) => (
    <section id={id} className="section container">
        <h2 className="section-title">{title}</h2>
        {children}
    </section>
);
