import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import Navbar from "../component/Navbar";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      localStorage.setItem("jwtToken", res.data.token);
      console.log(res.data); // Handle auth token
      window.location.href = "/dashboard"; // Redirect to Home
    } catch (err) {
      console.error("Login failed:", err.response.data);
    }
  };

  // ✅ Function to Redirect User to Spotify Login
  const loginWithSpotify = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auth/spotify/login");
      window.location.href = res.data.url; // Redirect to Spotify OAuth
    } catch (error) {
      console.error("Spotify Login Error:", error.message);
    }
  };

  return (
    <>
      <Navbar />
      <motion.div 
        className="min-h-screen bg-[#121212] flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.form 
          onSubmit={handleSubmit}
          className="bg-gray-900 p-8 rounded-lg w-80"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.h2 
            className="text-2xl font-bold text-[#1e90ff] mb-6 text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Login
          </motion.h2>
          <motion.input 
            type="email" 
            name="email" 
            placeholder="Email" 
            className="w-full p-2 mb-4 bg-gray-800 border-none text-white rounded"
            onChange={handleChange}
            required
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          />
          <motion.input 
            type="password" 
            name="password" 
            placeholder="Password" 
            className="w-full p-2 mb-4 bg-gray-800 border-none text-white rounded"
            onChange={handleChange}
            required
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          />
          <motion.button
            type="submit"
            className="w-full bg-[#1e90ff] p-2 rounded text-white font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            Login
          </motion.button>

          {/* ✅ Spotify Login Button */}
          <motion.button
            type="button"
            onClick={loginWithSpotify}
            className="w-full bg-green-500 p-2 rounded text-white font-semibold mt-4 flex justify-center items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.9 }}
          >
            <img src="/spotify-logo.png" alt="Spotify" className="w-5 h-5" />
            Login with Spotify
          </motion.button>

          <motion.p 
            className="mt-4 text-sm text-center text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
          >
            Don't have an account? <Link to="/register" className="text-[#1e90ff]">Sign up</Link>
          </motion.p>
        </motion.form>
      </motion.div>
    </>
  );
};

export default Login;
