import {Transition} from 'react-transition-group'
import { useRef, useState } from "react"

export default function TransitionPage() {
  const [inStatus, setInStatus] = useState(true)
  // fix: findDOMNode is deprecated in StrictMode.
  const ulRef = useRef(null)
  const [unMountState, setUnMountState] = useState(false)
  return (
    <div className="container">
      <h3 className="text-center">Transition</h3>
      <Transition
        appear={true}
        in={inStatus}
        timeout={0} // 过渡状态立即到达过渡结束状态
        nodeRef={ulRef}
        unmountOnExit={unMountState} // 过渡完成后，卸载组件
      >
        {
          (state) => (
            <ul
              className={`list-group mt-3 transition-${state}`}
              ref={ulRef}
            >
              {/* page-fade 与 state 状态组件控制过渡 */}
              <li className={`list-group-item`}>状态：{inStatus ? '显示' : '隐藏'}</li>
              <li className={`list-group-item`}>状态：{inStatus ? '显示' : '隐藏'}</li>
              <li className={`list-group-item`}>状态：{inStatus ? '显示' : '隐藏'}</li>
              <li className={`list-group-item`}>状态：{inStatus ? '显示' : '隐藏'}</li>
              <li className={`list-group-item`}>状态：{inStatus ? '显示' : '隐藏'}</li>
              <li className={`list-group-item`}>状态：{inStatus ? '显示' : '隐藏'}</li>
              <li className={`list-group-item`}>状态：{inStatus ? '显示' : '隐藏'}</li>
            </ul>
          )
        }
      </Transition>
      <div className="text-center mt-3">
        <button className="btn btn-primary"
          onClick={() => setInStatus(!inStatus)}
        >{inStatus ? '隐藏' : '显示'}列表</button>
        <button className="btn btn-primary ml-3" onClick={() => setUnMountState(!unMountState)}>unmountOnExit 状态：{unMountState.toString()}</button>
      </div>
    </div>
  )
}