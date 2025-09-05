

import './App.css';
import NavigationBar from './components/NavigationBar';
import "./style/landingPage.css"
import Intro from './components/Intro';
import Trending from './components/Trending';
import Superhero from './components/Superhero';

function App() {
  return (
    <div>
      {/* section */}
      <div className='myBg'>
        <NavigationBar />
        <Intro />
      </div>
      {/* end section */}

      {/* Trending section */}
      <div className='trending'>
        <Trending />
      </div>
      {/* end Trending */}

      {/* superhero section */}
      <div className='superhero'>
        <Superhero />
      </div>
      {/* end superhero */}

    </div>
  );
}

export default App;
