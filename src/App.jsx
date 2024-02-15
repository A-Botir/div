import { useState } from 'react'
import ListItem from './assets/components/ListItem'

function App(title, firstbtn) {
  // let [count, setCount] = useState(100);
  return (
      <div className='main_container'>
        <div className='centre_block h-40 bg-white flex justify-center items-center gap-5'>
          <ul className='block_list'>
            <li className='list_item'><span className='list_item__num'>1</span>Choose title</li>
            <li className='list_item'><span className='list_item__num'>2</span>Choose description</li>
            <li className='list_item'><span className='list_item__num'>3</span>Confirm data</li>
          </ul>
          <div>
            <h3 className='block_title'></h3>
            <button className='bg-slate-300 px-3 py-2'></button>
          </div>
        </div>
      </div>
  )
}

export default App
