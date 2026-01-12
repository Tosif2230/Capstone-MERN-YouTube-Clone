import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(e) {
    e.preventDefault();

    if (!fullName || !email || !password) {
      alert("All fields required");
      return;
    }

    const resp = fetch("http://localhost:5050/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userName: fullName,
        email: email,
        password: password,
      }),
    });
    let result = resp.then((data) => data.json());
    result.then((data) => {
      alert("Registeration Done");
      console.log(data, "Sign Up data")
      setIsLogin(true);
      setFullName("");
      setEmail("");
      setPassword("");
    });
  }

  function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) {
      alert("All fields required");
      return;
    }

    const resp = fetch("http://localhost:5050/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    let result = resp.then((data) => data.json());
    result.then((data) => {
      console.log(data, "login data")
      localStorage.setItem("token", data.accessToken);
      setEmail("");
      setPassword("");
      navigate("/")
    });
  }

  return (
    <div className="bg-[url('/Youtube.jpg')] bg-cover min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-red-600">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <button
            type="button"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
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
