function Menu() {
    const menuItems = [
        {
            text: 'Home',
            link: '#'
        },
        {
            text: 'About',
            link: '#about'
        },
        {
            text: '24hr Intensity',
            link: '#day-chart'
        },
        {
            text: 'More Info',
            link: '#more-info'
        },
        {
            text: '7 Day Intensity',
            link: '#week-chart'
        }
    ];

    return (
        <nav>
            {menuItems.map((item, i) => {
                return <a key={`menu-item-${i}`} href={item.link}>{item.text}</a>;
            })}
        </nav>
    );
}

export default Menu;