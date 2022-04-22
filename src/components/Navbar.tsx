import Select from 'react-select';

type NavbarProps = {
  textColor?: string;
  backgroundColor?: string;
  themeOption: any;
  setThemeOption: any;
  themeOptions: {
    value: string;
    label: string;
  }[];
};

export default function Navbar({
  textColor,
  backgroundColor,
  themeOption,
  setThemeOption,
  themeOptions,
}: NavbarProps) {
  return (
    <nav
      className="inset-x-0 top-0 p-4 sm:px-8 h-16 shadow-lg fixed z-10 bg-gray-50"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="flex items-center justify-between">
        <div
          className="flex text-lg font-mono sm:text-2xl"
          style={{ color: textColor }}
        >
          <span className="font-light">webs</span>
          <span className="font-bold">IDE</span>
        </div>
        <div className="flex items-center space-x-4 font-mono">
          <Select
            name="theme"
            value={themeOption}
            options={themeOptions}
            onChange={setThemeOption}
          />
          <div style={{ color: textColor }}>theme</div>
        </div>
      </div>
    </nav>
  );
}
