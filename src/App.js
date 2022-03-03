import './styles/styles.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import CardController from './components/cardSection/cardController';

const App = () => {
  return (
    <div className='globalWrapper'>
      <div className='topHalf'>
        <Navbar />
        <Header />
      </div>
      <div className='bottomHalf'>
        <CardController />
      </div>
    </div>
  )
}

export default App;