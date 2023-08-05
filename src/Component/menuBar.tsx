// ./list/MenuBar.tsx

import React from 'react';
import Button from './Button';

const MenuBar: React.FC = () => {
  return (
    <div className="menu-bar">
      <Button label="Button 1" onClick={() => console.log('Button 1 clicked')} />
      <Button label="Button 2" onClick={() => console.log('Button 2 clicked')} />
      <Button label="Button 3" onClick={() => console.log('Button 3 clicked')} />
      <Button label="Button 4" onClick={() => console.log('Button 4 clicked')} />
      <Button label="Button 5" onClick={() => console.log('Button 5 clicked')} />
    </div>
  );
};

export default MenuBar;
