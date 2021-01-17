import './App.css'
import { Route, Switch, useLocation } from 'react-router-dom'
import router from './router'

function App() {
  let {pathname} = useLocation()
  const match = ['/transition', '/csstransiton', '/transitongroup', '/switchtransition'].includes(pathname)
  let sourcePath = pathname.substr(1).replace(/^[\w\d]{1}/, x => x.toUpperCase()) + 'Page'
  return (
    <div className="app px-3 py-3 container">
      {
        match && (
          <div className="text-right">
            <a className="btn btn-primary" rel="noreferrer" target="_blank" href={`https://yuelau.github.io/readme-react-go/#/codeview?origin=${sourcePath}`}>查看源码</a>
          </div>
        )
      }
      <Switch>
        {
          router.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))
        }
      </Switch>
    </div>
  )
}

export default App
