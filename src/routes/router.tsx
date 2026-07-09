import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { PATHS } from "./paths";
import HomePage from "../pages/HomePage";
import CoursesPage from "../pages/CoursesPage";
import Gallery from "../components/gallery/Gallery";
import Internship from "../pages/Internship";
import AboutUsPage from "../pages/AboutUsPage";
import ContactPage from "../pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: PATHS.HOME,
        element: <HomePage />,
      },
      {
        path: PATHS.ABOUT,
        element: <AboutUsPage />
      }, {
        path: PATHS.COURSES,
        element: <CoursesPage />,
      }, {
        path: PATHS.GALLERY,
        element: <Gallery />,

      }, {
        path: PATHS.CONTACT,
        element: <ContactPage />,
      }, {
        path: PATHS.INTERNSHIP,
        element: <Internship />,
      },
    ],
  },
]);

export default router;
