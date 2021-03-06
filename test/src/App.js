import React, { Component } from 'react'
import LinkList from './components/LinkList'
import CreateLink from './components/CreateLink'
import Header from './components/Header'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={LinkList} />
          <Route exact path="/create" component={CreateLink} />
        </Switch>
        <LinkList />
        <CreateLink/>
      </div>
    </div>
  )
 }
}

export default App
