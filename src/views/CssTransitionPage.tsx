import { useState } from 'react'
import {CSSTransition} from 'react-transition-group'
import './common.css'

export default function CSSTransitonPage() {
  const [list, setList] = useState(() => [
    (new Date()).getTime(),
    (new Date()).getTime() + 1,
    (new Date()).getTime() + 2
  ])
  const addItem = () => {
    setList([...list, (new Date()).getTime()])
  }
  // 移除时没有过渡效果
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
        <h3 className="text-center">CssTransitionPage</h3>
        <ul className="list-group">
          {
            list.map((item, index) => (
              <CSSTransition
              key={item}
                in
                classNames="csstransition-fade" // classNames 控制过渡
                timeout={10}
                appear // 初始化过渡
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