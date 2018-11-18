import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button,Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import {submitLogin} from '../../reducers/authreducer';
import { Loading } from '../../components/Loading';
import AuthContainer from './AuthContainer';
import history from '../../history';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin:false,
      modal: false
    }
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  async handleValidSubmit(event, values) {
    await this.props.submitLogin(values.email, values.password);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <AuthContainer title={"LogIn"}>
        <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
          <AvField name="email" label="Email Address" type="email" required />
          <AvField name="password" label="Password" type="password" required />
          <Loading >
            <Button color="primary" >Login</Button>
          </Loading>
          <br />
          <p className="secondary-link" onClick={this.toggle}>Forgot Password</p>
        </AvForm>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Reset Password</ModalHeader>
          <ModalBody>
          
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Get Reset Password Link</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </AuthContainer>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitLogin }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);