import { useState } from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import './common.css'

export default function TransitionGroupPage() {
  const [list, setList] = useState([
    new Date().getTime(),
    new Date().getTime() + 1,
    new Date().getTime() + 2
  ])
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
      <h3 className="text-center">TransitionGroupPage</h3>
      <ul className="list-group">
        <TransitionGroup
          component={null} // 特定的结构，component 值设置为 null，不影响原有的结构
          childFactory={child => {
            console.log(child) // 查看渲染过程中每个子元素的详细信息：props、key 等，进行拦截处理
            return child
          }}
        >
          {
            list.map((item, index) => (
              // CSSTransition 包装了元素
              <CSSTransition
                appear
                timeout={{
                  appear: 410,
                  enter: 410,
                  exit: 300
                }}
                key={item}
                classNames="transition-group-fade"
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

        </TransitionGroup>
      </ul>
    </>
  )
}