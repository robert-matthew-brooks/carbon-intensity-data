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
      'This page is a front end for a public back end api. The project was designed process and present the raw data using <em>React</em> components. These components are reusable, and they also allow the displayed information can change based on user input. Another consideration for this project was using a clear layout with landmark tags that can be easily interpreted by accessibility tools.',
      'The <a href="https://api.carbonintensity.org.uk/">back end api</a> provides data about carbon intensity levels in Great Britain as a result of electricity generation. The components below filter the data for specific time periods, and render a graph using a <a href="https://react-chartjs-2.js.org/">third party library</a>.'
    ]
  };

  const moreInfo = {
    id: 'more-info',
    title: 'More Info',
    paras: [
      'The bar chart is responsive, and the relevent data will be fetched from the api on demand. When the data fetching is slow, a loading message will show over the chart. This can be simulated on Google Chrome within <em>Developer Options</em>, by selecting <em>Slow 3G</em> under the <em>Network</em> tab',
      'The page layout is also responsive, and will reduce wasted space when the display area is smaller. An option to simulate mobile browsers screen types can also be found within <em>Developer Options</em>.',
      'The pie chart below is static and will not reload with other React components. Seven requests are made to the api when the page loads (one for each day), then the data is processed and combined into a chart.'
    ]
  };

  const planning = {
    id: 'planning',
    title: 'Planning',
    paras: [
      'While planning the app, I considered the heirarchy of the components that would be used. The initial <em>wireframe</em> and <em>component tree</em> diagrams can see below. These were helpful for not only nesting html tags in a logical manner, but also to ensure React state variables were held in the correct level of the tree and only passed down when needed.',
      '<img src="https://raw.githubusercontent.com/robert-matthew-brooks/carbon-intensity-data-front-end/main/react-data-fetching/src/img/wireframe.png" alt="Wireframe plan of webpage">',
      '<img src="https://raw.githubusercontent.com/robert-matthew-brooks/carbon-intensity-data-front-end/main/react-data-fetching/src/img/component-tree.png" alt="Component tree diagram of webpage">'
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
        <Text id={planning.id} title={planning.title} paras={planning.paras} />
      </main>

      <Footer />
    </div>
  );
}

export default App;