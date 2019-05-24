import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import { Provider} from 'react-redux';
import  store  from './store';



import Code from './components/Code'
import Navbar from './components/Navbar'
import Php from './components/Php'
import All from './components/animate/All';
import All2 from './components/animate/All2'



function App() {
  return (
    <Provider store={store}>
      <Router>
    <div className="App">
      <header className="App-header">
      <Navbar />
      <Route exact path="/" component={Code} />
      <Route exact path="/php" component={Php} />
      <Route exact path="/python" component={Code} />
      <Route exact path="/a" component={All}/>
      <Route exact path="/b" component={All2}/>
      
      </header>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
