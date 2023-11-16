"use client";

interface Props {
  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
}

const MenuButton = ({ showMenu, setShowMenu }: Props) => {
  return (
    <div
      className="w-6 h-4 ml-4 flex flex-col justify-between cursor-pointer md:hidden"
      onClick={() => setShowMenu(!showMenu)}
    >
      <span className="w-full h-[2px] bg-gray-950 rounded-md dark:bg-[var(--primary)]"></span>
      <span className="w-full h-[2px] bg-gray-950 rounded-md dark:bg-[var(--primary)]"></span>
      <span className="w-full h-[2px] bg-gray-950 rounded-md dark:bg-[var(--primary)]"></span>
    </div>
  );
};

export default MenuButton;
