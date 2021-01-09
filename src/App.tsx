import './App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './views/Home'
import TransitonPage from './views/TransitionPage'
import CSSTransitonPage from './views/CSSTransitonPage'
import TransitionGroupPage from './views/TransitionGroupPage'
import SwitchTransitonPage from './views/SwitchTransitonPage'

function App() {
  return (
    <div className="app pl-3 pr-3">
      <Switch>
        <Route path="/transition" component={TransitonPage}/>
        <Route path="/csstransiton" component={CSSTransitonPage}/>
        <Route path="/transitongroup" component={TransitionGroupPage}/>
        <Route path="/switchtransition" component={SwitchTransitonPage}/>
        <Route component={Home}/>
      </Switch>
    </div>
  )
}

export default App
