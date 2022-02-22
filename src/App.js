import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.scss';
import Routes from './app/routes';
import { HelpCenter } from './pages/HelpCenter';

function App() {

  return (
    <>
      <div className="App">
        <Routes />
      </div>
      <Switch>
        <Route path="/helpCenter" exact component={HelpCenter}></Route>
      </Switch>
    </>
  );
}

export default App;
