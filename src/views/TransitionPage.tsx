import {Transition} from 'react-transition-group'
import { useState } from "react"

export default function TransitionPage() {
  const [inStatus, setInStatus] = useState(false)
  return (
    <>
      <h3 className="text-center">Transiton</h3>
      <button className="btn btn-primary"
        onClick={() => setInStatus(!inStatus)}
      >文本展示</button>
      <Transition
        in={inStatus}
        timeout={400}
        unmountOnExit
      >
        {
          (state: any) => (<p className={`fade fade-${state}`}>状态：{inStatus ? '显示' : '隐藏'}</p>)
        }
      </Transition>
    </>
  )
}