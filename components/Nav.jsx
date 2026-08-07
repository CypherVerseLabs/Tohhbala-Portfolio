
import Link from "next/link";
import { useRouter } from "next/router";

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", Icon: HiHome },
  { name: "about", path: "/about", Icon: HiUser },
  { name: "services", path: "/services", Icon: HiRectangleGroup },
  { name: "work", path: "/work", Icon: HiViewColumns },
  {
    name: "testimonials",
    path: "/testimonials",
    Icon: HiChatBubbleBottomCenterText,
  },
  {
    name: "contact",
    path: "/contact",
    Icon: HiEnvelope,
  },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav>
      <div className="flex items-center gap-x-6">
        {navData.map((link, i) => (
          <Link
            href={link.path}
            key={i}
            className={`${
              link.path === pathname ? "text-accent" : ""
            } relative flex items-center group hover:text-accent transition-all duration-300`}
          >
            {/* tooltip */}
            <div className="absolute bottom-full mb-2 hidden group-hover:flex left-1/2 -translate-x-1/2">
              <div className="relative flex items-center rounded-md bg-white px-3 py-1 text-sm text-primary capitalize">
                {link.name}

                {/* triangle */}
                <div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-solid border-l-transparent border-r-transparent border-t-white border-l-[6px] border-r-[6px] border-t-[8px]"
                  aria-hidden
                />
              </div>
            </div>

            {/* icon */}
            <link.Icon aria-hidden />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;


