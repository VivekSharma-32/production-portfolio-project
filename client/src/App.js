import "./App.css";
import Layout from "./components/Layout/Layout";
import { useTheme } from "./context/ThemeContext";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import TechStack from "./pages/TechStack/TechStack";
import WorkExperience from "./pages/WorkExperience/WorkExperience";
import ScrollToTop from "react-scroll-to-top";
import Tada from "react-reveal/Tada";
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <TechStack />
          <Projects />
          <WorkExperience />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <Tada>
            <h4 className="text-center">
              Made with 😍 Vivek Sharma &copy; 2023
            </h4>
          </Tada>
        </div>
      </div>
      <ScrollToTop
        smooth
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
        color="#f29f67"
      />
    </>
  );
}

export default App;
