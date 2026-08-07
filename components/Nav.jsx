
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
  {
    name: "home",
    path: "/",
    Icon: HiHome,
  },
  {
    name: "about",
    path: "/about",
    Icon: HiUser,
  },
  {
    name: "services",
    path: "/services",
    Icon: HiRectangleGroup,
  },
  {
    name: "work",
    path: "/work",
    Icon: HiViewColumns,
  },
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
    <nav
      className="
        fixed
        bottom-8
        left-1/2
        z-50
        -translate-x-1/2
        xl:bottom-8
      "
    >
      <div
        className="
          flex
          items-center
          gap-x-4
          rounded-full
          border
          border-white/10
          bg-black/20
          px-6
          py-3
          backdrop-blur-md
        "
      >
        {navData.map((link, i) => {
          const Icon = link.Icon;

          return (
            <Link
              href={link.path}
              key={i}
              className={`
                group
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                transition-all
                duration-300
                ${
                  link.path === pathname
                    ? "text-accent"
                    : "text-white/70"
                }
                hover:text-accent
              `}
            >
              {/* tooltip */}
              <span
                className="
                  absolute
                  -top-10
                  scale-0
                  rounded-md
                  bg-white
                  px-3
                  py-1
                  text-xs
                  text-black
                  transition-all
                  group-hover:scale-100
                "
              >
                {link.name}
              </span>


              {/* triangle */}
              {link.path === pathname && (
                <span
                  className="
                    absolute
                    -bottom-2
                    left-1/2
                    -translate-x-1/2
                    border-l-[6px]
                    border-r-[6px]
                    border-t-[8px]
                    border-l-transparent
                    border-r-transparent
                    border-t-accent
                  "
                />
              )}


              {/* icon */}
              <Icon className="text-xl" aria-hidden />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;