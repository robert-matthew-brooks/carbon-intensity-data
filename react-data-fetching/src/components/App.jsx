import { useState } from 'react';

import Menu from './Menu.jsx';
import Header from './Header.jsx';
import Text from './Text.jsx';
import DayChart from './DayChart.jsx';
import WeekChart from './WeekChart.jsx';
import Footer from './Footer.jsx';

function App() {
  const about = {
    id: 'about',
    title: 'About',
    paras: [
      'This page is designed as a front-end for a public back-end api. The project is focussed around presenting the data using <em>react</em> components. These components are reusable, and they also allow the displayed information can change based on user input. Another consideration for this project was using a clear layout with landmark tags that can be easily interpreted by accessibility tools.',
      'The react module for displaying the charts is <a href="https://react-chartjs-2.js.org/">react-chartjs-2</a>. The api can be found at <a href="https://api.carbonintensity.org.uk/">api.carbonintensity.org.uk</a>, and it provides data about carbon intensity levels in Great Britain as a result of electricity generation.'
    ]
  };

  const moreInfo = {
    id: 'more-info',
    title: 'More Info',
    paras: [
      'The bar chart is responsive, and the relevent data will be fetched from the api on demand. When the data fetching is slow, a loading message will show over the chart. This can be simulated on Google Chrome within <em>Developer Options</em>, by selecting <em>Slow 3G</em> under the <em>Network</em> tab',
      'The page layout is also responsive, and will reduce wasted space when the display area is smaller. An option to simulate mobile browsers screen types can also be found within <em>Developer Options</em>.',
      'The pie chart below is static, and will not reload with other react components.'
    ]
  };

  return (
    <div className="app">
      <Menu />
      <Header />

      <main>
        <Text id={about.id} title={about.title} paras={about.paras} />
        <DayChart />
        <Text id={moreInfo.id} title={moreInfo.title} paras={moreInfo.paras} />
        <WeekChart />
      </main>

      <Footer />
    </div>
  );
}

export default App;