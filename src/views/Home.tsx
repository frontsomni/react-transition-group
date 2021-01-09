import { NavLink} from 'react-router-dom'

export default function Home() {
  return (
    <>
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
    </>
  )
}