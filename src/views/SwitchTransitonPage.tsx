import './common.css'
import {CSSTransition, SwitchTransition} from 'react-transition-group'
import { useState } from 'react'
export default function SwitchTransitonPage() {
  const [state, setState] = useState(false)
  return (
    <>
      <h3 className="text-center">SwitchTransiton</h3>
      <SwitchTransition
        mode="out-in"
      >
      <CSSTransition
        key={state ? "Goodbye, world!" : "Hello, world!"}
        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
        classNames='page-fade'
      >
        <button onClick={() => setState(state => !state)}
          className="btn btn-primary"
        >
          {state ? "Goodbye, world!" : "Hello, world!"}
        </button>
      </CSSTransition>
    </SwitchTransition>
    </>
  )
}