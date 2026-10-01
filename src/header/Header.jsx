import { Link } from "react-router-dom";

function Header() {
  const menu = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/" },
    { label: "About", path: "/" },
    { label: "Projects", path: "/" },
    { label: "Blog", path: "/" },
    { label: "Book a call", path: "/" },
  ];

  return (
    <div className="flex justify-around items-center w-full bg-gray-200 p-4">
      <div className="text-3xl font-bold">Portfolio Creator</div>

      <nav className="flex gap-6">
        {menu.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="hover:underline"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Header;