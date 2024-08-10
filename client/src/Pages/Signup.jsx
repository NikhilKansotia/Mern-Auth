import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold">Sign Up</h1>
      <form className="flex flex-col gap-4 mt-3">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 p-3"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3"
        />
        <button className="bg-[#5B99C2] text-[#F9DBBA] p-3 rounded-lg uppercase hover:opacity-80">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an Account?</p>
        <Link to="/signin">
          <span className="text-blue-500">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
