import React, { useState } from 'react';
import { Select } from 'antd';

import getSelection from '../../helpers/getSelection';
import classes from './ColorSelector.module.scss';

const { Option } = Select;

function handleChange(value, ref, selection, setSelection) {
  getSelection(selection);
  document.execCommand('styleWithCSS', false, true);
  document.execCommand('foreColor', false, value);
  ref.current.focus();
  setSelection({});
}

const saveSelection = (oldSelection, setter) => {
  if (!Object.keys(oldSelection).length) {
    const selection = window.getSelection();
    const mySelection = {
      anchorNode: selection.anchorNode,
      anchorOffset: selection.anchorOffset,
      focusNode: selection.focusNode,
      focusOffset: selection.focusOffset,
    };
    setter(mySelection);
  }
};

const ColorSelector = (props) => {
  const [selection, setSelection] = useState({});
  return (
    <>
      <Select
        defaultValue="white"
        className={classes.selector}
        onChange={(value) => handleChange(value, props.inputRef, selection, setSelection)}
        onMouseEnter={() => saveSelection(selection, setSelection)}
      >
        <Option value="#FFFFFF" style={{ color: 'black' }}>white</Option>
        <Option value="#FF0000" style={{ color: 'red' }}>red</Option>
        <Option value="#0000FF" style={{ color: 'blue' }}>blue</Option>
        <Option value="#008000" style={{ color: 'green' }}>green</Option>
      </Select>
    </>
  );
};

export default ColorSelector;
