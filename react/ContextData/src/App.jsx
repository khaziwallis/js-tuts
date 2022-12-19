import Header from './container/Header';
import Footer from './container/Footer';
import BodyContent from './container/BodyContent';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';

const App = () => {
  
  return (
    <div>
      <Header></Header>
      <BodyContent></BodyContent>
      <Footer></Footer>
    </div>
  )
};

export default App;
