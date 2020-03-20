import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'antd';
import { clearAllHistory } from '../../actions/action';

class clearHistoryButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    showModal = () => {
        this.setState({ visible: true });
    };

    handleOk = () => {
        const { clearAllHistory } = this.props;
        clearAllHistory();
        this.setState({ visible: false });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    render() {
        return (
            <div>
                <Button type='primary' danger block onClick={this.showModal}>
                    Remove All History
                </Button >
                <Modal
                    title='Warning!'
                    visible={this.state.visible}
                    okType={'danger'}
                    okText={'Confirm'}
                    cancelText={'Cancel'}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>This will delete all history.</p>
                    <p>Are you sure about this?</p>
                </Modal>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    clearAllHistory: () => dispatch(clearAllHistory()),
})

export default connect(null, mapDispatchToProps)(clearHistoryButton);