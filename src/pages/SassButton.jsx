import React from 'react';
import Button from '../components/Button';
import '../components/Button.scss'

const SassButton = () => {
  return (
    <div className='buttonWrapper'>
       <div>
          <Button size='large' color='blue' onClick={()=>console.log('클릭!')}>Button</Button>
          <Button color='blue' onMouseMove={()=>console.log('마우스 무브')}>Button</Button>
          <Button size='small' color='blue'>Button</Button>
       </div>
        <div>
           <Button size='large' color='orange'>Button</Button>
            <Button color='orange'>Button</Button>
            <Button size='small' color='orange'>Button</Button>
        </div>
        <div>
           <Button size='large' color='pink'>Button</Button>
            <Button color='pink'>Button</Button>
            <Button size='small' color='pink'>Button</Button>
        </div>
     </div>
  );
};

export default SassButton;