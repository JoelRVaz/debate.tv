import NavBar from './components/NavBar/NavBar.js';
import VideoSection from './components/VideoSection/VideoSection.js';
import TemporaryDrawer from './components/TemporaryDrawer/TemporaryDrwaer.js'


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <VideoSection></VideoSection>
      <TemporaryDrawer></TemporaryDrawer>
    </div>
  );
}

export default App;
