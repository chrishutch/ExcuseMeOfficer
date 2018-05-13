import React from 'react';
import Modal from 'react-responsive-modal';

export default class Info extends React.Component {
  state = {
    open: true,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="info">
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Officer Feedback</h2>
          <p>
           Excuse Me Officer believes every interaction helps the community understand a bit more about an officer and their commmuntiy.
      Rate any interactions that you have or witnessed and tell us how it went! 90 seconds and your story matters to the community!
          </p>
        </Modal>
      </div>
    );
  }
}