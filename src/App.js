// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import './styles/App.css'
import TemporaryDrawer from './components/home/MenuDrawer.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import HomeView from './components/home/HomeView.js'
import ProgrammeView from './components/programme/ProgrammeView.js'
import SignedInUsersOfferView from './components/offer/SignedInUsersOfferView.js'
import StaffsView from './components/staff/StaffsView.js'
import AvailableOffers from './components/offer/AvailableOffers.js'
import LoginPageView from './components/logging/LoginPageView.js'

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path='/justfit-client/'
              component={LoginPageView}
            />
            <Route exact path='/justfit-client/home' component={HomeView} />
            <Route path='/justfit-client/0' component={ProgrammeView} />
            <Route path='/justfit-client/1' component={SignedInUsersOfferView} />
            <Route path='/justfit-client/2' component={StaffsView} />
            <Route path='/justfit-client/login' component={LoginPageView} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
