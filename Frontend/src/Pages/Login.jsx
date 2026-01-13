import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

async function handleSignUp(e) {
  e.preventDefault();

  //Field check
  if (!fullName || !email || !password) {
    alert("All fields required");
    return;
  }


  try {
    const resp = await fetch("http://localhost:5050/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: fullName,
        email,
        password,
      }),
    });

    const data = await resp.json();

    if (!resp.ok) {
      alert(data.message);
      return;
    }

    alert("Registration successful");
    setIsLogin(true);
  } catch (err) {
    alert(err.message);
  }
}


  async function handleLogin(e) {
  e.preventDefault();

  //Field Check
  if (!email || !password) {
    alert("All fields required");
    return;
  }

  try {
    const resp = await fetch("http://localhost:5050/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await resp.json();

    if (!resp.ok) {
      alert(data.message);
      return;
    }

    localStorage.setItem("token", data.accessToken);
    localStorage.setItem("user", JSON.stringify(data.user));

    navigate("/");//TNavigate use for back to Home Page
  } catch (err) {
    alert(err.message);
  }
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
