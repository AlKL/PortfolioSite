import './styles/styles.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import CardController from './components/cardSection/cardController';

const App = () => {
  return (
    <div className='globalWrapper'>
      <Navbar />
      <Header />
      <CardController />
    </div>
  )
}

export default App;