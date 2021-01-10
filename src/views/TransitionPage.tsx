import {Transition} from 'react-transition-group'
import { useState } from "react"

export default function TransitionPage() {
  const [inStatus, setInStatus] = useState(true)
  return (
    <>
      <h3 className="text-center">Transiton</h3>
      <button className="btn btn-primary"
        onClick={() => setInStatus(!inStatus)}
      >文本展示</button>
      <Transition
        appear
        in={inStatus}
        timeout={800}
      >
        {
          (state: any) => (
            <>
            <p className={`page-fade-initial page-fade page-fade-${state}`}>状态：{inStatus ? '显示' : '隐藏'}</p>
            <p className={`page-fade-initial page-fade page-fade-${state}`}>状态：{inStatus ? '显示' : '隐藏'}</p>
            <p className={`page-fade-initial page-fade page-fade-${state}`}>状态：{inStatus ? '显示' : '隐藏'}</p>
            <p className={`page-fade-initial page-fade page-fade-${state}`}>状态：{inStatus ? '显示' : '隐藏'}</p>
            <p className={`page-fade-initial page-fade page-fade-${state}`}>状态：{inStatus ? '显示' : '隐藏'}</p>
            <p className={`page-fade-initial page-fade page-fade-${state}`}>状态：{inStatus ? '显示' : '隐藏'}</p>
            <p className={`page-fade-initial page-fade page-fade-${state}`}>状态：{inStatus ? '显示' : '隐藏'}</p>
            </>
          )
        }
      </Transition>
    </>
  )
}