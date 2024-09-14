import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate Google login and redirect to homepage
    navigate("/version-request-list");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col w-96 py-20 px-10 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">发版管理系统</h1>
        <button
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          onClick={handleLogin}
        >
          使用Google账号登录
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
