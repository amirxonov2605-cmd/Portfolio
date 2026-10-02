import { href, Link } from "react-router-dom";

function Header() {
  const menu = [
    { label: "Home", href: "#top" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "#blog" },
    { label: "Book a call", href: "#contact" },
  ];

  return (
    <div className="flex justify-around items-center w-full bg-gray-200 p-4">
      <div className="text-3xl font-bold">Portfolio Creator</div>

      <nav className="flex gap-6">
        {menu.map((item) => (
          <a key={item.label} href={item.href} className="hover:underline">
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default Header;