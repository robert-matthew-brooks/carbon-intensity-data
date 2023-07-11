import ReactHTMLParser from 'react-html-parser';

function About({id, title, paras}) {
    return (
        <section id={id}>
            <h2>{title}</h2>
            {paras.map((para, i) => {
                return <p key={`${id}-para-${i}`}>{ReactHTMLParser(para)}</p>;
            })}
        </section>
    );
}

export default About;