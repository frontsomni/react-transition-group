import './App.css'
import { NavLink, Route, Switch } from 'react-router-dom'
import TransitonPage from './views/TransitionPage'
import CSSTransitonPage from './views/CSSTransitonPage'
import TransitionGroupPage from './views/TransitionGroupPage'
import SwitchTransitonPage from './views/SwitchTransitonPage'

function App() {
  return (
    <div className="app pl-3 pr-3">
      <h3 className="text-center mt-5 mb-3">React Transitoin Group</h3>
      <ul className="list-group">
        <li className="list-group-item disabled">Components</li>
        <li className="list-group-item">
          <NavLink to="transition">Transitoin Component</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="csstransiton">CSSTransiton Component</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="transitongroup">TransitionGroup Component</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="switchtransition">SwitchTransition Component</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/transition" component={TransitonPage}/>
        <Route path="/csstransiton" component={CSSTransitonPage}/>
        <Route path="/transitongroup" component={TransitionGroupPage}/>
        <Route path="/switchtransition" component={SwitchTransitonPage}/>
      </Switch>
    </div>
  )
}

export default App
