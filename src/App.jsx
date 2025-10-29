import "./App.css";
import Header from "./components/header";
import Hero from "./components/Hero/Hero";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import AboutSection from "./components/Aboutsection";

function App() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      
      await loadSlim(engine);
    }).then(() => {
      setInit(true); 
    });
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProjectsSection />
          <AboutSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
