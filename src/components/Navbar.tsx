

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold text-lime-400">
          Event Scheduler
        </h3>
        <div className="space-x-4">
          <h3 className="hover:text-lime-300 duration-200">Home</h3>
          <h3  className="hover:text-lime-300 duration-200">Archived</h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
