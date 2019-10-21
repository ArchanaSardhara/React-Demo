import React, { useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';

const App = (props) => {
  const [tab, setTab] = useState('home');
  const toggle = (tab) => {
    setTab(tab);
    props.history.push(`/${tab}`)
  }
  const navlist = [
    { label: 'Home', value: 'home' },
    { label: 'Login', value: 'login' },
    { label: 'Dashboard', value: 'dashboard' }
  ]
  return (
    <React.Fragment>
      <Nav className='bg-dark text-white w-100'>
        {navlist.map(n => <NavItem key={n.value}>
          <NavLink active={tab === n.value} onClick={() => toggle(n.value)}>
            {n.label}
          </NavLink>
        </NavItem>)}
      </Nav>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps, null)(App);
