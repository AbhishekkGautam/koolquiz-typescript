import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    state: { error },
    loginUser,
  } = useAuth();

  const loginHandler = () => {
    if (email !== "" && password !== "") {
      loginUser(email, password);
    }
  };

  const submitLoginCredentials = () => {
    setEmail("admin@gmail.com");
    setPassword("admin123");
  };

  return (
    <main className="main-wrapper">
      <section className="login-section-wrapper container">
        <div className="card login-card-container">
          <div className="card-title">Login</div>
          {error ? <div className="login-error-message">{error}</div> : null}
          <div className="card-body">
            <form onSubmit={e => e.preventDefault()}>
              <div className="input-group">
                <label className="input-label">Email address</label>
                <input
                  type="email"
                  className="input-field"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label className="input-label">Password</label>
                <input
                  type="password"
                  className="input-field"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <button
                className="btn btn-primary login-card-btn"
                onClick={loginHandler}
              >
                Login
              </button>
              <div
                className="login-with-test-btn"
                onClick={submitLoginCredentials}
              >
                Use test credentials
              </div>
            </form>
          </div>
          <div className="create-new-account-link">
            <Link to="/signup">
              Create New Account
              <span className="material-icons">chevron_right</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
