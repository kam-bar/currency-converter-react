import "./Section.css";

const Section = ({ title, body }) => (
    <section className="section">
        {title && (
            <header className="section__header">
                <h2 className="section__title">{title}</h2>
            </header>
        )}
        <div className="section__body">{body}</div>
    </section>
);

export default Section;
