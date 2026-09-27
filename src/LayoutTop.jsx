import Nav from "./Component/Nav";
import Footer from "./Component/Footer";
import { Outlet } from "react-router-dom";
const LayoutTop = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
        <div>
             <Nav />
             <main className="flex w-full">
                <Outlet />
             </main>
        </div>
        <Footer />
    </div>
  );
}

export default LayoutTop;