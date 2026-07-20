import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

/**
 * App Component
 * 
 * Root layout component that provides:
 * - Persistent navigation bar across all routes
 * - Scroll-to-top functionality on route changes
 * - Main content area with outlet for nested routes
 * - Footer section
 * - Maximum width constraint for better readability
 */
function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main className="min-h-[calc(100vh-100px)] max-w-384 mx-auto">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;