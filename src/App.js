import ThumbnailCard from './components/ThumbnailCard/ThumbnailCard.js'
import NavBar from './components/NavBar/NavBar.js';
import VideoShelf from './components/VideoShelf/VideoShelf.js';




function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <VideoShelf></VideoShelf>
      <ThumbnailCard></ThumbnailCard>
    </div>
  );
}

export default App;
