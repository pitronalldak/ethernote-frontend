import React, {Component, PropTypes} from 'react';
import {Modal} from 'react-bootstrap';
import {connect} from 'react-redux';

class BorrowerModalComponent extends Component {

    render() {
        return (
            <Modal {...this.props}>
                <Modal.Body>
                    Invalid form!
                </Modal.Body>
            </Modal>
        )
    }
}

export default BorrowerModalComponent;