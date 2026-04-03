import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../utils/authSlice";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!isLogin && !fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function handleSignUp(e) {
    e.preventDefault();

    if (!validate()) return;
    try {
      const resp = await fetch("https://capstone-mern-youtube-clone.onrender.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: fullName,
          email,
          password,
        }),
      });

      const data = await resp.json();

      if (!resp.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      alert("Registration Done");
      setIsLogin(true);
      setFullName("");
      setEmail("");
      setPassword("");
    } catch {
      alert("Server error");
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    if (!validate()) return;
    try {
      const resp = await fetch("https://capstone-mern-youtube-clone.onrender.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await resp.json();

      if (!resp.ok) {
        alert(data.message || "Login failed");
        return;
      }

      dispatch(
        loginSuccess({
          user: data.user,
          token: data.accessToken,
        })
      );
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="bg-[url('/Youtube.jpg')] bg-cover min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-red-600">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form className="space-y-4">
          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
            </>
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}

          <button
            type="button"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 disabled:opacity-60"
            onClick={!isLogin ? handleSignUp : handleLogin}
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-red-600 ml-1 hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
