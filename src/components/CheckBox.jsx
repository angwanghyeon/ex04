import React from 'react';
import {MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md'
import style from './CheckBox.module.css';

const CheckBox = ({children, checked, ...rest}) => {
  return (
    <div className={style.checkbox}>
      <p>{children}</p>
      <label>
        <input type="checkbox" checked={checked} {...rest} />
        <div className={style.icon}>
          {checked ? <MdCheckBox className={style.checked}></MdCheckBox> : 
          <MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank>}</div>
      </label>
    </div>
  );
};

export default CheckBox;