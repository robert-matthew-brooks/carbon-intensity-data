import { useState } from 'react';

import Header from './Header.jsx';
import FilterForm from './FilterForm.jsx';
import DayChart from './DayChart.jsx';
import Footer from './Footer.jsx';

function App() {
  const [daysBack, setDaysBack] = useState(0);

  return (
    <div className="app">
      <Header />

      <main>
        <FilterForm daysBack={daysBack} setDaysBack={setDaysBack} />
        <DayChart daysBack={daysBack} />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;