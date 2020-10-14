import React from 'react';
import { Button, Modal, Tooltip } from 'antd';

import classes from './CreateLink.module.scss';
import getSelection from '../../helpers/getSelection';

class CreateLink extends React.Component {
  state = {
    visible: false,
    input: '',
    mySelection: {},
  };

  handleOk = () => {
    this.setState({
      visible: false,
      input: '',
    });
    getSelection(this.state.mySelection);
    document.execCommand('createLink', false, this.state.input);
    this.props.inputRef.current.focus();
  };

  showModal = () => {
    const selection = window.getSelection();
    this.setState({
      visible: true,
      input: '',
      mySelection: {
        anchorNode: selection.anchorNode,
        anchorOffset: selection.anchorOffset,
        focusNode: selection.focusNode,
        focusOffset: selection.focusOffset,
      },
    });
  };

  inputHandler = (e) => {
    this.setState({ input: e.target.value });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  componentDidUpdate() {
    if (this.myRef && this.myRef.current && this.state.visible) {
      this.myRef.current.focus();
    }
  }

  render() {
    this.myRef = React.createRef();
    return (
      <>
        <Tooltip title="link">
          <Button
            onClick={this.showModal}
            icon={<img src={this.props.iconSrc} alt="" />}
            className={classes.button}
          />
        </Tooltip>
        <Modal
          title="Please insert link"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <input
            value={this.state.input}
            onInput={this.inputHandler}
            className={classes.promptInput}
            ref={this.myRef}
          />
        </Modal>
      </>
    );
  }
}

export default CreateLink;
