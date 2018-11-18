import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import React, { Component } from 'react';

import { Loading } from '../../components';
import { forgot } from '../../redux/actions';
import AuthContainer from './AuthContainer';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
  }

  async handleValidSubmit(event, values) {
    this.setState({ loading: true });
    await this.props.forgot(values.email);
    this.setState({ loading: false });
  }

  render() {
    return (
      <AuthContainer title={"LogIn"}>
        <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
          <AvField name="email" label="Email Address" type="email" required />
          <Loading loading={this.props.AuthReducer.loading}>
            <Button color="primary">Forgot Password</Button>
          </Loading>
          <br />
          <Link className="secondary-link" to={'/'}>Login</Link>
        </AvForm>
      </AuthContainer>
    )
  }
}

function mapStateToPorps(state) {
  return {
    ...state
  }
}


export default connect(mapStateToPorps, { forgot })(ForgotPassword);