import { useState } from "react";

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function submitHandler(e){
        e.preventDefault()
        console.log(`email is ${email}`);
        console.log(`password is ${password}`);
        
        setEmail('')
        setPassword('')
    }

    function chnageEmailHandler(e){
        setEmail(e.target.value)
    }
    function chnagePasswordHandler(e){
        setPassword(e.target.value)
    }
 
  return (
<div className="flex items-center justify-center min-h-screen  px-4">
  <div className="w-full max-w-md bg-white border border-emerald-300 shadow-xl rounded-2xl p-8 sm:p-10">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Log In</h2>

    <form
      className="flex flex-col gap-6"
      onSubmit={(e) => {
        submitHandler(e);
      }}
    >
      <input
        className="border border-emerald-400 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800 placeholder-gray-600 transition-all duration-200"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => chnageEmailHandler(e)}
        required
      />

      <input
        className="border border-emerald-400 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800 placeholder-gray-600 transition-all duration-200"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => chnagePasswordHandler(e)}
        required
      />

      <button
        type="submit"
        className="bg-emerald-600 text-white font-semibold rounded-xl py-3 hover:bg-emerald-500 shadow-md transition duration-300"
      >
        Log In
      </button>
    </form>

    <p className="text-center text-sm text-gray-700 mt-5">
      Don't have an account?{" "}
      <span className="text-emerald-700 font-semibold cursor-pointer hover:underline">
        Sign Up
      </span>
    </p>
  </div>
</div>


  );
};

export default LogIn;
