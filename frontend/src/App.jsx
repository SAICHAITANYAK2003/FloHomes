import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full">
        <Home />
        <About />
        <Projects />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default App;
