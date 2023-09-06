import "../src/styles/fonts.css";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import MenuSection from "./components/MenuSection";

function App() {
  return (
    <>
      <Header />
      <MenuSection />
      <Gallery />
      <Catalog/>
      <Footer />
    </>
  );
}

export default App;
