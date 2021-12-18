import React from 'react';
import { render } from "react-dom";
import { Link, Outlet } from 'react-router-dom';
import LoginButton from './components/loginButton.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table: ''
    }
  }

  render() {
    return (
      <div className="container">
        <nav>
          <h1>UnicodeR</h1>
          <Link to="/dashboard">Dashboard</Link> | {" "}
          <Link to="/preferences">Preferences</Link>
          <Link to="/randomUnicode">Unicode Display</Link>
          <LoginButton />
        </nav>
        <Outlet />
      </div>
    );
  }
}

export default App;
