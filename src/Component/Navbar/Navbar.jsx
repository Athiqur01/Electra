import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthProvider, { AuthContext } from "../../Provider/AuthProvider/AuthProvider";


const Navbar = () => {

  const {user,logOut}=useContext(AuthContext)

    return (
        <nav>
              <div className="navbar bg-[#100F6C]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li className="text-white"><NavLink to='/' className='text-white '>Home</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-white">Electra</a>
  </div>
  <div className="navbar-center hidden md:flex lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink to='/' ><button className="text-white">Home</button></NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    {user? <a onClick={logOut} className="btn btn-circle bg-red-200"><NavLink to='' >LogOut</NavLink></a>  :<a className="btn btn-circle bg-green-200"><NavLink to='/login' >Login</NavLink></a>}
  </div>
</div>
        </nav>
    );
};

export default Navbar;