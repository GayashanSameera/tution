import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import React, { Component } from 'react';

import { Loading } from '../../components';
import { reset } from '../../redux/actions';
import AuthContainer from './AuthContainer';

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ''
    }
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
  }

  componentDidMount(){
    console.log(this.props.match.params)
    // const request = this.getRequest();
		// 	const params = request.getRouteParams();
      let token = this.props.match.params.token ? this.props.match.params.token : null;
      this.setState({
        token: token
      })
  }

  async handleValidSubmit(event, values) {
    await this.props.reset(this.state.token, values.password)
  }

  render() {
    return (
      <AuthContainer title={"Reset Password"}>
        <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
        <AvField name="password" label="Password" type="password" />
        <AvField name="confirmationPassword" label="Confirmation Password" type="password" validate={{match:{value:'password'}}} />
          <Loading loading={this.props.AuthReducer.loading}>
            <Button color="primary">Reset Password</Button>
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


export default connect(mapStateToPorps, { reset })(ResetPassword);