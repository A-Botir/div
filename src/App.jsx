import React, { useState } from 'react';
import ListItem from './assets/components/ListItem';

function App() {
  const [selected, setSelected] = useState(1);
  const [blockTitle, setBlockTitle] = useState('Choose title content');
  const [blockButton1Text, setBlockButton1Text] = useState('Submit title');
  const [blockButton2Text, setBlockButton2Text] = useState('');

  const handleItemClick = (index) => {
    setSelected(index);
    if (index === 2) {
      setBlockTitle('Choose description content');
      setBlockButton1Text('Back');
    } else if (index === 3) {
      setBlockTitle('Are you happy now?');
      setBlockButton1Text('No, go back');
      setBlockButton2Text('Yes, go ahead');
    }
  };

  const handleButtonClick = () => {
    if (selected === 2) {
      setBlockTitle('Choose description content');
      setBlockButton1Text('Back');
    } else if (selected === 3) {
      setBlockTitle('Are you happy now?');
      setBlockButton1Text('No, go back');
      setBlockButton2Text('Yes, go ahead');
    }
  };

  return (
    <div className='main_container'>
      <div className='centre_block h-40 bg-white flex justify-center items-center gap-5'>
        <ul className='block_list'>
          <li>
            <button
              className={selected === 1 ? 'list_item active' : 'list_item'}
              onClick={() => handleItemClick(1)}
            >
              <span className='list_item__num'>1</span>Choose title
            </button>
          </li>
          <li>
            <button
              className={selected === 2 ? 'list_item list_item--op active' : 'list_item list_item--op'}
              onClick={() => handleItemClick(2)}
            >
              <span className='list_item__num list_item__num--op'>2</span>Choose description
            </button>
          </li>
          <li>
            <button
              className={selected === 3 ? 'list_item list_item--op active' : 'list_item list_item--op'}
              onClick={() => handleItemClick(3)}
            >
              <span className='list_item__num list_item__num--op'>3</span>Confirm data
            </button>
          </li>
        </ul>
        <div>
          <h3 className='block_title'>{blockTitle}</h3>
          <button className='block_btn block_btn--1 bg-slate-300 px-3 py-2 mr-2' onClick={() => handleButtonClick()}>
            {blockButton1Text}
          </button>
          <button className='block_btn block_btn--2 bg-slate-300' onClick={() => handleButtonClick()}>
            {blockButton2Text}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
