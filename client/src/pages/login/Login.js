import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">SocialHub</h3>
          <span className="login-desc">
            Connect with the friends and the world around you on SocialHub
          </span>
        </div>
        <div className="login-right">
          <div className="login-box">
            <input placeholder="Email" className="login-input"></input>
            <input placeholder="Password" className="login-input"></input>
            <button className="login-btn">Log In</button>
            <span className="login-forgot">Forgot Password ?</span>
            <button className="register-btn">Create a New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
