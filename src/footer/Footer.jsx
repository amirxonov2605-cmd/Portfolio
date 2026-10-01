import { Mail } from "lucide-react";

function Footer() {
  const columns = [
    {
      title: "About",
      links: ["About"],
    },
    {
      title: "Services",
      links: ["Services", "Blog", "Instagram"],
    },
    {
      title: "Experience",
      links: ["Experience", "Projects", "Twitter"],
    },
    {
      title: "Contact",
      links: ["Contact", "Dribbble"],
    },
  ];

  return (
    <footer className="bg-black text-white px-6 md:px-14 py-16">
      <div className="mx-auto max-w-6xl">

        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Ready to make something kickass?
          </h2>

          <a
            href="#"
            className="mt-1 inline-block text-3xl md:text-4xl font-bold text-[#3b4cff] hover:text-blue-500 transition"
          >
            Let's get on a call.
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-base font-bold mb-2">
              Portfolio Creator.
            </h3>

            <p className="text-[11px] text-gray-500 mb-3">
              4353 Delaware Avenue, San Francisco, USA
            </p>

            <a
              href="mailto:hi@thefolio.com"
              className="flex items-center gap-2 text-[11px] text-gray-500 hover:text-white transition"
            >
              <Mail size={14} />
              hi@thefolio.com
            </a>
          </div>

          <div className="grid grid-cols-3 gap-x-8 gap-y-6">

            <div>
              <a
                href="#"
                className="text-[11px] text-white hover:text-gray-400"
              >
                About
              </a>

              <a
                href="#"
                className="block mt-5 text-[11px] text-white hover:text-gray-400"
              >
                Contact
              </a>

              <a
                href="#"
                className="block mt-5 text-[11px] text-white hover:text-gray-400"
              >
                Dribbble
              </a>
            </div>

            <div>
              <a
                href="#"
                className="text-[11px] text-white hover:text-gray-400"
              >
                Services
              </a>

              <a
                href="#"
                className="block mt-5 text-[11px] text-white hover:text-gray-400"
              >
                Blog
              </a>

              <a
                href="#"
                className="block mt-5 text-[11px] text-white hover:text-gray-400"
              >
                Instagram
              </a>
            </div>

            <div>
              <a
                href="#"
                className="text-[11px] text-white hover:text-gray-400"
              >
                Experience
              </a>

              <a
                href="#"
                className="block mt-5 text-[11px] text-white hover:text-gray-400"
              >
                Projects
              </a>

              <a
                href="#"
                className="block mt-5 text-[11px] text-white hover:text-gray-400"
              >
                Twitter
              </a>
            </div>

          </div>
        </div>

        <div className="mt-16 pt-5 border-t border-gray-800">
          <p className="text-[9px] md:text-[10px] text-gray-500">
            © All rights reserved. &nbsp;
            <a href="#" className="hover:text-white">Sumit Hegde</a>
            &nbsp; · &nbsp;
            <a href="#" className="hover:text-white">Powered by Webflow</a>
            &nbsp; / &nbsp;
            <a href="#" className="hover:text-white">Image License Info</a>
            &nbsp; / &nbsp;
            <a href="#" className="hover:text-white">Instructions</a>
            &nbsp; / &nbsp;
            <a href="#" className="hover:text-white">Changelog</a>
            &nbsp; / &nbsp;
            <a href="#" className="hover:text-white">Style Guide</a>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;