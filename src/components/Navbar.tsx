type NavbarProps = {
  textColor?: string;
  backgroundColor?: string;
};

export default function Navbar({ textColor, backgroundColor }: NavbarProps) {
  return (
    <nav
      className="inset-x-0 top-0 p-4 sm:px-8 h-16 shadow-lg fixed z-10 bg-gray-50"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="flex items-center justify-center">
        <div
          className="flex text-lg font-mono sm:text-2xl"
          style={{ color: textColor }}
        >
          <span className="font-light">webs</span>
          <span className="font-bold">IDE</span>
        </div>
      </div>
    </nav>
  );
}
