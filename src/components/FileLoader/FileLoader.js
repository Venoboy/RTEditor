import React from 'react';
import { Button, Modal, Tooltip } from 'antd';
import readFromFile from '../../helpers/readFromFile';

class FileLoader extends React.Component {
  state = {
    visible: false,
    file: {},
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    readFromFile(this.state.file, this.props.setInitialText);
    this.setState({
      visible: false,
      file: {},
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  inputHandler = (e) => {
    this.setState({ file: e.target.files[0] });
  };

  render() {
    return (
      <>
        <Tooltip title="load from file">
        <Button
          type="primary"
          onClick={this.showModal}
          icon={<img src={this.props.iconSrc} alt="" />}
        />
        </Tooltip>
        <Modal
          title="Choose file"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <input type="file" onChange={this.inputHandler} />
        </Modal>
      </>
    );
  }
}

export default FileLoader;
