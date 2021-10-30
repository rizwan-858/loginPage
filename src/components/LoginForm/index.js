import {Component} from 'react'
import {FaUser, FaLock} from 'react-icons/fa'

import './index.css'

class LoginForm extends Component {
  render() {
    return (
      <div className="login-container">
        <div>
          <h1 className="heading">Foot Moves</h1>
          <p className="tagLine">Lets Make Every Move Count</p>
        </div>
        <form className="form">
          <div className="userName">
            <FaUser className="logo" />
            <input
              className="userNameInput"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="password">
            <FaLock className="lock" />
            <input
              className="passwordInput"
              type="password"
              placeholder="Password"
            />
            <button type="button" className="showBtn">
              Show
            </button>
          </div>
          <div className="cont">
            <input
              type="checkbox"
              id="remember"
              className="checkbox-container"
            />
            <label htmlFor="remember" className="checkbox">
              Remember me
            </label>
            <button type="button" className="forgotBtn">
              Forgot Password
            </button>
          </div>
          <button type="button" className="loginBtn">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
