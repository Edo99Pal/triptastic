import Header from './components/header/header.component';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

import './App.css';
import FirstSection from './components/first-section/first.component';
import SecondSection from './components/second-section/second-component';
import ThirdSection from './components/third-section/third.component';
import FourthSection from './components/fourth-section/fourth.component';
import FifthSection from './components/fifth-section/fifth.component';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
    </div>
  );
}

export default App;
