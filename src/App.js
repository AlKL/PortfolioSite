import './styles/styles.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';

const App = () => {
  return (
    <div className='globalWrapper'>
      <Navbar />
      <Header />
    </div>
  )
}

export default App;