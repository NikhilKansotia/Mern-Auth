import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#5B99C2]">
      <div className="p-3 flex justify-between items-center max-w-6xl mx-auto text-[#F9DBBA]">
        <Link to="/">
          <h className="font-bold">Auth App</h>
        </Link>
        <ul className="flex gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/signin">
            <li>Sign In</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
