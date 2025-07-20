import navImg from "../assets/nav-img.png"

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex items-start  max-w-7xl mx-auto">
        <img src={navImg} alt="" className="w-15 h-14 bg-white rounded-full"/>
      </div>
    </nav>
  );
};

export default Navbar;
