import React, { Component } from 'react';
//import NameForm from './components/NameForm';
//import ReactSurveyForm from './components/ReactSurveyForm';
import AccountLedger from './components/AccountLedger';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h2 className="center ">Account Ledger</h2>
        </div>
        <AccountLedger/>
      </div>
      );
    }
  }
export default App;