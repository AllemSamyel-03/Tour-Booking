import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiEye, FiEyeOff, FiLogIn } from "react-icons/fi";
import { toast } from "react-toastify";
import AuthContext from "../../context/AuthContext";
import logo from "../../assets/firstcry-logo.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmitLogin = (event) => {
    event.preventDefault();
    const result = loginUser(email, password);

    if (result.success) {
      toast.success(result.message);
      navigate("/", { replace: true });
    } else {
      setErrorMsg(result.message);
      toast.error(result.message);
    }
  };

  return (
    <main className="auth-page login-page">
      <section className="auth-image-panel">
        <img
          src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1000&q=80"
          alt="children reading in preschool"
        />
      </section>
      <motion.section
        className="auth-card"
        initial={{ opacity: 0, x: 22 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45 }}
      >
        <img
          src={logo}
          alt="firstcry intelli education"
          className="auth-logo"
        />
        <span className="eyebrow">Welcome back</span>
        <h1>Login to book your preschool tour.</h1>
        <form onSubmit={onSubmitLogin}>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="parent@example.com"
            />
          </label>
          <label>
            Password
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </label>
          {errorMsg !== "" && <p className="error-text">{errorMsg}</p>}
          <button className="primary-button auth-submit" type="submit">
            <FiLogIn /> Login
          </button>
        </form>
        <p className="auth-switch">
          New parent? <Link to="/signup">Create an account</Link>
        </p>
      </motion.section>
    </main>
  );
};

export default Login;
