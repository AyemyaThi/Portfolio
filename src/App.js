import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
//import { usePortfolio, PortfolioProvider } from "./hooks/usePortfolio"; // Import the hook and provider

function App() {
  //const { name, year } = usePortfolio();

  return (
    // <PortfolioProvider>
      <ChakraProvider>
        <AlertProvider>
          <main>
            <Header />
            <LandingSection />
            <ProjectsSection />
            <ContactMeSection />
            <Footer />
            <Alert />
          </main>
        </AlertProvider>
      </ChakraProvider>
    // </PortfolioProvider>
  );
}

export default App;
