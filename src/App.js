import React from 'react';
import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from './context';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import About from './components/Pages/About';
import NotFound from './components/Pages/NotFound'

function App(props) {
  return (
    <Provider>
    <Router>
    <div className="">
      <Header branding='My Contact' />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Contacts} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact/add' component={AddContact}/>
          <Route exact path='/contact/edit/:id' component={EditContact}/>
          <Route component={NotFound} />
        </Switch>
      </div>
      
    </div>
    </Router>
    </Provider>
  );
}

export default App;
