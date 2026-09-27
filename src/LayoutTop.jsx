import Nav from "./Component/Nav";
import Footer from "./Component/Footer";
import { Outlet } from "react-router-dom";
const LayoutTop = () => {
  return (
    <>
    <Nav />
    <main>
        <Footer />
        <Outlet />
    </main>
    </>
  )
}

export default LayoutTop;