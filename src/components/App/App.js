import React, { useRef, useState } from 'react';
import 'antd/dist/antd.css';
import ReactHtmlParser from 'react-html-parser';
import Header from '../Header/Header';
import classes from './App.module.scss';
import Controls from '../Controls/Controls';

const App = () => {
  const initialTextValue = 'This is <b>example</b> text. Edit here...';
  const [initialText, setInitialText] = useState(initialTextValue);
  const [text, setText] = useState(initialTextValue);
  const [isBoldActive, setBoldActive] = useState(true);
  const inputRef = useRef(null);

  const inputHandler = () => {
    setText(inputRef.current.innerHTML.toString());
  };

  return (
    <div className={classes.wrapper}>
      <Header />
      <div className={classes.editorWrapper}>
        <Controls
          isBoldActive={isBoldActive}
          setBoldActive={setBoldActive}
          inputRef={inputRef}
          text={text}
          setInitialText={setInitialText}
        />
        <div
          onInput={inputHandler}
          className={classes.text}
          contentEditable={true}
          ref={inputRef}
          suppressContentEditableWarning={true}
        >
          {ReactHtmlParser(initialText)}
        </div>
      </div>
    </div>
  );
};

export default App;
