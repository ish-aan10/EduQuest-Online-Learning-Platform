import Courses from "./components/courses/courses";
import FCourses from "./components/f-courses/f-courses";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Subscription from "./components/subscription/subscription";
import Testimony from "./components/testimony/testimony";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FCourses />
      <Courses />
      <Subscription />
      <Testimony />
      <Footer />
    </div>
  );
}

export default App;
