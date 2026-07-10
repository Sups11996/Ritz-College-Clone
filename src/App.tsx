import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
// import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Navbar />

      {/* <main className="min-h-[calc(100vh-100px)] max-w-384 mx-auto">
        <Outlet />
      </main> */}

        <Outlet />


      <Footer />
    </>
  );
}

export default App;