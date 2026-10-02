function Header() {
  const menu = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">

        <a href="#" className="font-logo text-3xl font-bold tracking-tight text-black">
          Portfolio Creator<span className="text-orange-500">.</span>
        </a>

        <nav className="flex items-center gap-12">
          {menu.map((item) => (
            <a key={item.label} href={item.href} className="text-base text-black hover:text-gray-500 transition-colors">
              {item.label}
            </a>
          ))}

          <a href="#contact" className="inline-flex items-center gap-3 text-base text-black hover:text-gray-500 transition-colors">
            Book a call <span>→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;