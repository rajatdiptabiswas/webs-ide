export default function Navbar() {
  return (
    <nav className="inset-x-0 top-0 p-4 sm:px-8 h-16 shadow-lg fixed z-10">
      <div className="flex items-center justify-center">
        <div className="flex text-lg font-mono sm:text-2xl">
          <span className="font-light">webs</span>
          <span className="font-bold">IDE</span>
        </div>
      </div>
    </nav>
  );
}
