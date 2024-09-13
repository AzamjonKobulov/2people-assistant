import Footer from "./components/layout/footer";
import Navbar from "./components/layout/navbar";
import AIAssistants from "./components/sections/ai-assistant";
import Contact from "./components/sections/contact";
import ForYourBussines from "./components/sections/for-your-bussines";
import Hero from "./components/sections/hero";
import Opportunities from "./components/sections/opportunities";
import Optimize from "./components/sections/optimize";
import Platforms from "./components/sections/platforms";
import Questions from "./components/sections/questions";
import Tariffs from "./components/sections/tariffs";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Optimize />
        <Opportunities />
        <AIAssistants />
        <Platforms />
        <Tariffs />
        <ForYourBussines />
        <Questions />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
