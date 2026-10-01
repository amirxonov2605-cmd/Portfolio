import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 w-full">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
