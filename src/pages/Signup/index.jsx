import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiEye, FiEyeOff, FiUserPlus } from "react-icons/fi";
import { toast } from "react-toastify";
import AuthContext from "../../context/AuthContext";
import { validateSignup } from "../../utils/validation";
import logo from "../../assets/firstcry-logo.svg";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const { signupUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const updateField = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const onSubmitSignup = (event) => {
    event.preventDefault();
    const formErrors = validateSignup(formData);
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      return;
    }

    const result = signupUser(formData);
    if (result.success) {
      toast.success("Signup successful. Welcome to IntelliTots.");
      navigate("/", { replace: true });
    } else {
      toast.error(result.message);
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-image-panel signup-panel">
        <img
          src="https://images.unsplash.com/photo-1567057419565-4349c49d8a04?auto=format&fit=crop&w=1000&q=80"
          alt="preschool children drawing together"
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
        <span className="eyebrow">Create parent account</span>
        <h1>Start your centre tour journey.</h1>
        <form onSubmit={onSubmitSignup}>
          <label>
            Full Name
            <input
              type="text"
              value={formData.fullName}
              onChange={(event) => updateField("fullName", event.target.value)}
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <span className="error-text">{errors.fullName}</span>
            )}
          </label>
          <label>
            Email
            <input
              type="email"
              value={formData.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="parent@example.com"
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </label>
          <label>
            Password
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(event) =>
                  updateField("password", event.target.value)
                }
                placeholder="Create password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {errors.password && (
              <span className="error-text">{errors.password}</span>
            )}
          </label>
          <label>
            Confirm Password
            <input
              type={showPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={(event) =>
                updateField("confirmPassword", event.target.value)
              }
              placeholder="Confirm password"
            />
            {errors.confirmPassword && (
              <span className="error-text">{errors.confirmPassword}</span>
            )}
          </label>
          <button className="primary-button auth-submit" type="submit">
            <FiUserPlus /> Signup
          </button>
        </form>
        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </motion.section>
    </main>
  );
};

export default Signup;
