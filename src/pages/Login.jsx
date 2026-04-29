import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { faildLogin, startLogin, successLogin } from '../redux/features/loginSlice';
import { useNavigate } from 'react-router-dom';

const Login = ({setIsLoggedIn}) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ❗ important
    dispatch(startLogin());

    setTimeout(() => {
      if (isLogin) {
        // 🔐 LOGIN
        if (
          formData.email === 'test@gmail.com' &&
          formData.password === '12345678'
        ) {
          const user = {
            email: formData.email,
            name: 'Ali',
          };
          dispatch(successLogin(user));
         setIsLoggedIn(true);
          navigate("/profile");
        } else {
          dispatch(faildLogin('Invalid email or password'));
        }
      } else {
        // 🆕 SIGNUP
        if (formData.password !== formData.confirmPassword) {
          dispatch(faildLogin('Passwords do not match'));
          return;
        }

        const user = {
          name: formData.name,
          email: formData.email,
        };

        dispatch(successLogin(user));
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {isLogin ? "Welcome Back 👋" : "Create Account"}
        </h2>

        {/* ✅ form connected */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-xl"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-xl"
          />

          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl"
            />
          )}

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl"
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-black font-semibold"
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;