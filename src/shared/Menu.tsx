import GiHubImage from "../assets/header/header-github.png";
import { createContext, useState } from "react";

interface Props {
  children?: React.ReactNode;
}

interface MenuContextProps {
  closeMenu: () => void;
}

const MenuContext = createContext({});

export default function Menu({ children }: Props) {
  const [stateMenu, setStateMenu] = useState(false);

  const handleOpenMenu = () => {
    setStateMenu(true);
  };

  const handleCloseMenu = () => {
    setStateMenu(false);
  };

  return (
    <MenuContext.Provider value={{ closeMenu: handleCloseMenu }}>
      <div>
        <button
          onClick={handleOpenMenu}
          className="flex items-center justify-center border-none outline-none bg-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            className="text-cyan-400"
          >
            <g clip-path="url(#clip0_429_11066)">
              <path
                d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_429_11066">
                <rect width="24" height="24" fill="white" transform="translate(0 0.000915527)" />
              </clipPath>
            </defs>
          </svg>
        </button>

        <div
          data-open={stateMenu}
          className="data-[open=true]:translate-x-0 w-full h-full fixed max-w-[85%] bg-neutral-900 left-0 top-0 transition-all -translate-x-full py-5"
        >
          <div className="flex items-center justify-between px-5 mb-5">
            <img src={GiHubImage} />

            <button
              onClick={handleCloseMenu}
              className="flex items-center justify-center border-none outline-none bg-transparent"
            >
              <svg
                className="text-cyan-400"
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
                />
              </svg>
            </button>
          </div>

          {children}
        </div>
      </div>
    </MenuContext.Provider>
  );
}
