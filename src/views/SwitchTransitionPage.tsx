import './common.css'
import {CSSTransition, SwitchTransition} from 'react-transition-group'
import { ChangeEvent, useState } from 'react'

type TMode = 'out-in' | 'in-out'

export default function SwitchTransitonPage() {
  const [state, setState] = useState(false)
  const [mode, setMode] = useState<TMode>('out-in')

  const onChangeInput = (ev: ChangeEvent<HTMLInputElement>) => {
    let value = ev.target.value as TMode
    setMode(value)
  }

  return (
    <>
      <h3 className="text-center">SwitchTransiton</h3>
      <div className="d-flex justify-content-center mb-5">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="out-in"
            checked={mode === 'out-in'}
            onChange={onChangeInput}
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            Mode: out-in
          </label>
        </div>
        <div className="form-check ml-3">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="in-out"
            checked={mode === 'in-out'}
            onChange={onChangeInput}
          />
          <label className="form-check-label" htmlFor="exampleRadios2">
            Mode: in-out
          </label>
        </div>
      </div>
      <SwitchTransition
        mode={mode} // 内置的过渡模式
      >
        {/* 使用 CSSTransition 包装要过渡的元素 */}
        <CSSTransition
          key={state ? "Goodbye, world!" : "Hello, world!"}
          timeout={500}
          classNames='switchtransiton-fade'
        >
          <div className="text-center">
            <button onClick={() => setState(!state)}
              className="btn btn-primary"
            >
              {state ? "Goodbye, world!" : "Hello, world!"}
            </button>
            </div>
        </CSSTransition>
    </SwitchTransition>
    </>
  )
}