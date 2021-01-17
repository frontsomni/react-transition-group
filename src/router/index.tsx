import CSSTransitonPage from "../views/CSSTransitonPage"
import Home from "../views/Home"
import SwitchTransitionPage from "../views/SwitchTransitionPage"
import TransitionGroupPage from "../views/TransitionGroupPage"
import TransitionPage from "../views/TransitionPage"

const router = [{
  path: '/transition',
  exact: true,
  component: TransitionPage
}, {
  path: '/csstransiton',
  exact: true,
  component: CSSTransitonPage
}, {
  path: '/transitongroup',
  exact: true,
  component: TransitionGroupPage
}, {
  path: '/switchtransition',
  exact: true,
  component: SwitchTransitionPage
}, {
  path: '',
  component: Home
}]

export default router