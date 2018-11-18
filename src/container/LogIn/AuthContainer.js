import React, { Component } from 'react';
import './AuthStyle.scss';
import NotificationsSystem from 'reapop';
import theme from 'reapop-theme-wybo';

class AuthContainer extends Component {
    render() {
        return (
            <div className="container-fluid">
            <NotificationsSystem theme={theme}/>
                <div className="row">
                    <div className="col-lg-3 col-md-2 col-sm-1"></div>
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <div className="card-body">
                            <div className="form-signin">
                                <div className="form-signin-heading text-center">
                                    <h3 className="sign-title2">{this.props.title}</h3>
                                    <h1 className="sign-title1">Tution Classes</h1>
                                    <div className="img-margin">
                                        
                                    </div>
                                </div>
                                {this.props.children}
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-1"></div>
                </div>
            </div>
        )
    }
}
export default AuthContainer;