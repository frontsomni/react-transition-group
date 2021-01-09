import { useState } from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import './common.css'

export default function TransitionGroupPage() {
  const [list, setList] = useState([new Date().getTime()])
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
          component={null}
        >
          {
            list.map((item, index) => (
              <CSSTransition
                timeout={1000}
                key={item}
                classNames="fade"
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