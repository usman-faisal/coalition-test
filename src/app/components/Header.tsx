import Image from "next/image";
import logo from "/public/logo.svg";
import NavLinks from "./NavLinks";
import NavProfile from "./NavProfile";

const links = [
  {
    text: "Dashboard",
    link: "/",
    icon: <Image width={16} height={16} src="/home.svg" alt="Dashboard" />,
  },
  {
    text: "Patients",
    link: "/",
    icon: <Image width={16} height={16} src="/patients.svg" alt="patients" />,
  },

  {
    text: "Schedule",
    link: "/",
    icon: <Image width={16} height={16} src="/calendar.svg" alt="calendar" />,
  },
  {
    text: "Message",
    link: "/",
    icon: <Image width={16} height={16} src="/chat.svg" alt="chat" />,
  },
  {
    text: "Transactions",
    link: "/",
    icon: (
      <Image width={16} height={16} src="/credit-card.svg" alt="credit-card" />
    ),
  },
];
export default function Header() {
  return (
    <header className="flex mt-8 items-center mx-auto w-[90vw] justify-between bg-white rounded-3xl p-6">
      <a href="/">
        <Image width={160} height={160} src={logo} alt="Logo" />
      </a>
      <NavLinks links={links} />
      <NavProfile />
    </header>
  );
}
