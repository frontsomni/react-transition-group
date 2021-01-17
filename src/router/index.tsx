import CssTransitionPage from "../views/CssTransitionPage"
import Home from "../views/Home"
import SwitchTransitionPage from "../views/SwitchTransitionPage"
import TransitionGroupPage from "../views/TransitionGroupPage"
import TransitionPage from "../views/TransitionPage"

const router = [{
  path: '/transition',
  exact: true,
  component: TransitionPage
}, {
  path: '/csstransition',
  exact: true,
  component: CssTransitionPage
}, {
  path: '/transitiongroup',
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