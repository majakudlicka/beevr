import React, {Component} from 'react';
import ErrorMessage from './ErrorMessage.js';

class LoginForm extends Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            email: '',
            password: '',
            errorMessage: '',
        };
    }

    onSubmit(evt) {
        evt.preventDefault();
        var state = this.props.state;
        this.setState({errorMessage: ''});
        this.props.loginRequest(this.state.email, this.state.password);
    };

    onChange(evt) {
        var email = this.state.email;
        var password = this.state.password;
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    }

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label className="control-label" htmlFor="Email">
                        Email
                    </label>
                    <input
                        className="form-control"
                        name="email"
                        id="Email"
                        type="email"
                        value={this.state.email}
                        placeholder="email"
                        onChange={this.onChange}
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                    />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="form-control"
                        name="password"
                        id="password"
                        type="password"
                        value={this.state.password}
                        placeholder="password"
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    <button className="btn btn-primary" type="submit">
                        {this.props.btnText}
                    </button>
                </div>
            </form>
        );
    }
}

export default LoginForm;
