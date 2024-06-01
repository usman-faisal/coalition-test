interface NavLink {
  text: string;
  link: string;
  icon: React.ReactNode;
}

export default function NavLinks({ links }: { links: NavLink[] }) {
  return (
    <nav className="">
      <ul className="flex items-center justify-center gap-8">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.link}
            className="flex items-center gap-2 hover:bg-green px-4 py-2 rounded-full"
          >
            {link.icon}
            {link.text}
          </a>
        ))}
      </ul>
    </nav>
  );
}
