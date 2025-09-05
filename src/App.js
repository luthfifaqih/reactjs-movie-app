

import './App.css';
import NavigationBar from './components/NavigationBar';
import "./style/landingPage.css"
import Intro from './components/Intro';
import Trending from './components/Trending';

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
      
    </div>
  );
}

export default App;
