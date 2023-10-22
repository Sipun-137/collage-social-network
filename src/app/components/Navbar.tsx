import Link from "next/link";
import Dropdown from "./Dropdown";
import { options } from "@/app/api/auth/[...nextauth]/option";
import { getServerSession } from "next-auth/next";
import ProfileDD from "./PofileDD";

const Navbar = async () => {
  const session = await getServerSession(options);
  console.log(session);
  const signin = !session ? (
    <Link href="/api/auth/signin" className="">
      signin
    </Link>
  ) : <ProfileDD/>;

  const menu = [
    { name: "Home", url: "/" },
    {
      name: "posts",
      url: "/",
      dropdown: [
        { name: "Internship", url: "/internship" },
        { name: "Job", url: "/job" },
        { name: "Event", url: "/event" },
      ],
    },
    { name: "about us", url: "/about" },
    { name: "test", url: "/test" },
  ];

const adminmenu= [
  { name: "Home", url: "/" },
  {
    name: "applications",
    url: "/",
    dropdown: [
      { name: "Internship", url: "/r/internship" },
      { name: "Job", url: "/r/job" },
      { name: "Event", url: "/r/event" },
    ],
  },{
    name:"post",url:"/r/post"
  },
  { name: "about us", url: "/about" },
  { name: "test", url: "/test" },
];
const navmenu=session?.user.role==="admin"?adminmenu:menu;
  return (
    <nav className="w-full bg-gray-800 shadow p-0">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/" className="">
              <div className="">
                {/* class name has to be written as avatar for image type of heading */}
                <div className="px-3 rounded text-center">
                  {/* <img src="" /> */}
                  <h1 className="text-2xl text-white font-bold">
                    COLLAGE SOCIAL NETWORK
                  </h1>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {navmenu.map(({ name, url, dropdown }, index) => (
                <li key={index} className="text-white">
                  {dropdown ? (
                    <Dropdown name={name} dropdownItems={dropdown} />
                  ) : (
                    <Link href={url}>{name}</Link>
                  )}
                </li>
              ))}
              <li className="text-white">{signin}</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
