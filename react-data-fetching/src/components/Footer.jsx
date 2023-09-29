function Footer() {
    const footerItems = [
        {
            text: 'github repo',
            link: 'https://github.com/robert-matthew-brooks/carbon-intensity-data'
        },
        {
            text: 'carbon intensity (data api)',
            link: 'https://api.carbonintensity.org.uk/'
        },
        {
            text: 'react-chartjs-2 (chart library)',
            link: 'https://react-chartjs-2.js.org/'
        }
    ];

    return (
        <footer>
            <ul>
                {footerItems.map((item, i) => {
                    return (
                        <li key={`footer-item-${i}`}>
                            <a href={item.link}>{item.text}</a>
                        </li>
                    );
                })}
            </ul>
        </footer>
    );
}

export default Footer;
