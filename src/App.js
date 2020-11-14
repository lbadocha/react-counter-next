import logo from './logo.svg';
import './App.css';

import Counter from './Counter';
import Heading from './Heading';

function App() {


  return (
      <div className="App">
        <header className="App-header">
          <Heading headingText="Licznik w react" />
        </header>
        <Counter initValue={0} />

        {/* <Heading headingText="React counter" />
        <Counter initValue={108}/>

        <Heading headingText="Licznik w react ponownie" />
        <Counter initValue={33} /> */}
      </div>
  );
}

export default App;
