import { useSelector } from "react-redux"

const NavBar = ()=>{

  const user = useSelector(store=>store.user)
 
    return(
        <div className="navbar bg-neutral-300">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Reporting Mechanism</a>
   
  </div>
  <div className="flex-none gap-2">
   {user &&(  <div className="dropdown dropdown-end mx-20">
        <div>
        <p className="flex justify-center"> Welcome<span>{user.name}</span></p>
        </div>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">{user.name}</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
   )}
  </div>
</div>
    )
}

export default NavBar