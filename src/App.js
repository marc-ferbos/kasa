import './App.scss';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Appartement from './Components/Appartement';
import Data from './Data/logement.json';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner
      title="Chez vous, partout et ailleurs"
      classBanner="home"></Banner>
      <div className="window">
        {Data.map((logement, index) => {
      return (
          <Appartement
            key={index}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
            location={logement.location}
            tags={logement.tags}
            description={logement.description}
            host={logement.host}
            rating={logement.rating}
          ></Appartement>
        );
      })}
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
