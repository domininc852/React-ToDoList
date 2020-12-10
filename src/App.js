import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DoneListContainer from './containers/DoneListContainer'
import NotFound from './components/NotFound'
import Navigation from './components/Navigation'
import LabelManagementContainer from './containers/LabelManagementContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{color:"white"}}>Hello React</h1>
      </header>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/done" component={DoneListContainer}></Route>
          <Route exact path="/labels" component={LabelManagementContainer}></Route>
          <Route exact path="/" component={ToDoList}></Route>
          
          <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
