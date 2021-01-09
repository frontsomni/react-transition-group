import { useState } from 'react'
import {CSSTransition} from 'react-transition-group'
import './common.css'

export default function CSSTransitonPage() {
  const [list, setList] = useState(() => [(new Date()).getTime()])
  const [inStatus ,setinStatus] = useState(false)
  const addItem = () => {
    setList([...list, (new Date()).getTime()])
  }
  const removeItem = (index: number) => {
    setList(prev => {
      const tmp = [...prev]
      tmp.splice(index, 1)
      return tmp
    })
  }
  return (
    <>
      <div className="container">
        <h3 className="text-center">CSSTransitonPage</h3>
        <button className="btn btn-primary mb-3" onClick={() => setinStatus(!inStatus)}>文本展示</button>
        <CSSTransition
          in={inStatus}
          appear
          timeout={1000}
          unmountOnExit
          classNames="fade"
        >
          <p>状态： {inStatus ? '显示' : '隐藏'} </p>
        </CSSTransition>
        <ul className="list-group">
          {
            list.map((item, index) => (
              <CSSTransition
              in
              classNames="fade"
              timeout={1000}
              key={item}
              appear
            >
              <li
              className="list-group-item d-flex align-items-center justify-content-between"
              >
                {index + 1} - {item}
                <div>
                  {
                    list.length > 1
                    && <button className="btn btn-primary mr-3"
                        onClick={() => removeItem(index)}
                      >移除</button>
                  }
                  <button className="btn btn-primary"
                    onClick={addItem}
                  >增加</button>
                </div>
              </li>
              </CSSTransition>
            ))
          }
        </ul>
      </div>
    </>
  )
}