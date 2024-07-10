import "./App.css";
import Concept from "./components/Concept";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Members from "./components/Members";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import WhyUsOne from "./components/WhyUsOne";
import WhyUsTwo from "./components/WhyUsTwo";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Concept />
      <Products />
      <Members />
      <WhyUsOne />
      <WhyUsTwo />
      <Contact />
    </>
  );
}

export default App;
