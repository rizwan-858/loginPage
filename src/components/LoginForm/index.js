import {Component} from 'react'
import {FaRegUser} from 'react-icons/fa'
import {BiHide, BiShowAlt} from 'react-icons/bi'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isPasswordVisible: false,
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    if (
      username.length >= 1 &&
      username.length <= 5 &&
      password.length >= 1 &&
      password.length <= 8
    ) {
      this.setState({
        errorMsg: 'username & password are too short',
        showSubmitError: true,
      })
    } else if (username.length > 1 && username.length <= 5) {
      this.setState({
        errorMsg: 'username is too short',
        showSubmitError: true,
      })
    } else if (password.length > 1 && password.length < 8) {
      this.setState({
        errorMsg: 'password is too short',
        showSubmitError: true,
      })
    } else if (username.length === 0 && password.length !== 0) {
      this.setState({
        errorMsg: 'Enter username',
        showSubmitError: true,
      })
    } else if (password.length === 0 && username.length !== 0) {
      this.setState({
        errorMsg: 'Enter password',
        showSubmitError: true,
      })
    } else if (username.length === 0 && password.length === 0) {
      this.setState({
        errorMsg: 'Enter username & password',
        showSubmitError: true,
      })
    } else {
      this.setState({errorMsg: '', showSubmitError: false})
    }
  }

  onClickShow = () => {
    this.setState({
      isPasswordVisible: true,
    })
  }

  onClickHide = () => {
    this.setState({
      isPasswordVisible: false,
    })
  }

  render() {
    const {isPasswordVisible, showSubmitError, errorMsg} = this.state
    return (
      <div className="app-container">
        <div className="login-container">
          <div>
            <h1 className="heading">Traceit</h1>
          </div>
          <div className="loginForm-container">
            <form className="form" onSubmit={this.submitForm}>
              <div className="userName">
                <input
                  className="userNameInput"
                  type="text"
                  placeholder="Username"
                  onChange={this.onChangeUsername}
                />
                <FaRegUser size="18px" />
              </div>
              <div className="password">
                <input
                  className="passwordInput"
                  type={isPasswordVisible ? 'text' : 'password'}
                  placeholder="Password"
                  onChange={this.onChangePassword}
                />
                {isPasswordVisible ? (
                  <button
                    type="button"
                    className="showBtn"
                    onClick={this.onClickHide}
                  >
                    <BiHide size="20px" />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="showBtn"
                    onClick={this.onClickShow}
                  >
                    <BiShowAlt size="20px" />
                  </button>
                )}
              </div>

              <button type="submit" className="loginBtn">
                Log In
              </button>
              {showSubmitError && <p className="error-message">*{errorMsg}</p>}
            </form>
          </div>
        </div>
        <div className="gif-container">
          <img
            className="gif"
            src="https://s3-alpha-sig.figma.com/img/6ea5/a5c5/58c67c513ceea5100fe30e8758f90452?Expires=1638144000&Signature=HM8CFeCIaCi4FtH3AfjIK8MHI9ZaP7FYMCnnn5b1buHxOt~4HN6tu~ZfzTbX6Z9VwmfAvHsH-FaihLDXcB07D3kizUb64cs6Jiz3KQWk6xLoRbGbV33rAjF8kPPMuvLHfiO8AQgc57S4H0heotQS3kxnIRBMxBCgqMlIn9qfkDCiIxgZ-LqLLPO-aG9VfwD0zdfyal7-NfN-8KF-Y3vmZZJetaH~7y6YVeCYasnqybubdo9S7QEnvFGVIAzBGK4L0aGOhsQc5DgkhaQOY9KKgU-SsuP1My1QnBwaL0gbwFJcuYbEFept1Gc1yjrid5~oglFrpUjXucXlUMNPagOVPQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          />
        </div>
      </div>
    )
  }
}

export default LoginForm
