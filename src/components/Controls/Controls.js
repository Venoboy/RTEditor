import React from 'react';
import { Button, Tooltip } from 'antd';

import boldIcon from '../../assets/pictures/icons/bold.png';
import italicIcon from '../../assets/pictures/icons/italic.png';
import underlineIcon from '../../assets/pictures/icons/underline.png';
import subIcon from '../../assets/pictures/icons/subscript.png';
import supIcon from '../../assets/pictures/icons/superscript.png';
import linkIcon from '../../assets/pictures/icons/link.png';
import saveIcon from '../../assets/pictures/icons/download.png';
import clearIcon from '../../assets/pictures/icons/clear-formatting.png';
import uploadIcon from '../../assets/pictures/icons/upload.png';
import classes from './Controls.module.scss';
import CreateLink from '../CreateLink/CreateLink';
import FileLoader from '../FileLoader/FileLoader';
import writeToFile from '../../helpers/writeToFile';
import ColorSelector from '../ColorSelector/ColorSelector';

const Controls = (props) => {
  const { inputRef, text, setInitialText } = props;
  return (
    <div className={classes.wrapper}>
      <Tooltip title="clear format">
        <Button
          icon={<img src={clearIcon} alt="" />}
          className={classes.button}
          onClick={() => {
            document.execCommand('removeFormat');
            inputRef.current.focus();
          }}
        />
      </Tooltip>
      <Tooltip title="bold">
        <Button
          icon={<img src={boldIcon} alt="" />}
          className={classes.button}
          onClick={() => {
            document.execCommand('bold');
            inputRef.current.focus();
          }}
        />
      </Tooltip>
      <Tooltip title="italic">
        <Button
          icon={<img src={italicIcon} alt="" />}
          className={classes.button}
          onClick={() => {
            document.execCommand('italic');
            inputRef.current.focus();
          }}
        />
      </Tooltip>
      <Tooltip title="underline">
        <Button
          icon={<img src={underlineIcon} alt="" />}
          className={classes.button}
          onClick={() => {
            document.execCommand('underline');
            inputRef.current.focus();
          }}
        />
      </Tooltip>
      <Tooltip title="subscript">
        <Button
          icon={<img src={subIcon} alt="" />}
          className={classes.button}
          onClick={() => {
            document.execCommand('subscript');
            inputRef.current.focus();
          }}
        />
      </Tooltip>
      <Tooltip title="superscript">
        <Button
          icon={<img src={supIcon} alt="" />}
          className={classes.button}
          onClick={() => {
            document.execCommand('superscript');
            inputRef.current.focus();
          }}
        />
      </Tooltip>
      <CreateLink inputRef={inputRef} iconSrc={linkIcon} />
      <ColorSelector inputRef={inputRef} />
      <Tooltip title="save to file">
        <Button
          type="primary"
          icon={<img src={saveIcon} alt="" />}
          className={classes.button}
          onClick={() => writeToFile(text)}
        />
      </Tooltip>
      <FileLoader iconSrc={uploadIcon} setInitialText={setInitialText} />
    </div>
  );
};

export default Controls;
