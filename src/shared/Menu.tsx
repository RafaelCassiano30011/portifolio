import GiHubImage from "../assets/header/header-github.png";

interface Props {
  children?: React.ReactNode;
}

export default function Menu({ children }: Props) {
  return (
    <div>
      <input className="hidden peer" type="checkbox" id={"menu"} />

      <label htmlFor={"menu"} className="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          className="text-cyan-500"
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
      </label>

      <div className="peer-checked:translate-x-0 w-full h-full fixed max-w-[85%] bg-neutral-900 left-0 top-0 transition-all -translate-x-full py-5">
        <div className="flex items-center justify-between px-5 mb-5">
          <img src={GiHubImage} />

          <label htmlFor={"menu"} className="flex items-center justify-center">
            <svg className="text-cyan-500" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 1024 1024">
              <path
                fill="currentColor"
                d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
              />
            </svg>
          </label>
        </div>

        {children}
      </div>
    </div>
  );
}
