import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import AddNote from './AddNote';
import NoteDetail from './NoteDetail';

class AppRouting extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar title="Snippet" />
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/note/create" component={AddNote} />
            <Route path="/note/:id" component={NoteDetail} />
          </Switch>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<AppRouting />, document.getElementById('root'));
registerServiceWorker();
if(module.hot) module.hot.accept();
