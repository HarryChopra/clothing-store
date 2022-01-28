import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { auth } from './firebase/firebase.utils'
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SigninSignupPage from './pages/SigninSignupPage'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    // Opens a subscription to firebase to actively listen (in the background) for user auth activity.
    // Returns an unsubsribe method to call, for instance when closing the application.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount() {
    // We need to unsubscribe so this listener stops listening and frees up memory.
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SigninSignupPage} />
        </Switch>
      </div>
    )
  }
}

export default App;
