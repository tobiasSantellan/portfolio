import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import useMediaQuery from "./hooks/useMediaQuery";
import { useState, useEffect } from "react";
import Skills from "./scenes/Skills";
import { motion } from "framer-motion";
// import Projects from "./scenes/Projects";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1260px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <div className="app bg-deep-blue">
    //   <Navbar
    //     isTopOfPage={isTopOfPage}
    //     selectedPage={selectedPage}
    //     setSelectedPage={setSelectedPage}
    //   />
    //   <div className="w-5/6 mx-auto md:h-full">
    //     {isDesktop && (
    //       <DotGroup
    //         selectedPage={selectedPage}
    //         setSelectedPage={setSelectedPage}
    //       />
    //     )}
    //     <motion.div
    //       margin="0 0 -200px 0"
    //       amount="all"
    //       onViewportEnter={() => setSelectedPage("home")}
    //     >
    //       <Landing setSelectedPage={setSelectedPage} />
    //     </motion.div>
    //   </div>
    //   <div className="w-5/6 mx-auto md:h-full">
    //     <motion.div
    //       margin="0 0 -200px 0"
    //       amount="all"
    //       onViewportEnter={() => setSelectedPage("skills")}
    //     >
    //       <Skills
    //         selectedPage={selectedPage}
    //         setSelectedPage={setSelectedPage}
    //       />
    //     </motion.div>
    //   </div>
    //   <div className="w-5/6 mx-auto">
    //     <motion.div
    //       margin="0 0 -200px 0"
    //       amount="all"
    //       onViewportEnter={() => setSelectedPage("projects")}
    //     >
    //       <Projects />
    //     </motion.div>
    //   </div>
    // </div>
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <motion.div
          onViewportEnter={() => {
            console.log("entro en home");
            setSelectedPage("home");
          }}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          onViewportEnter={() => {
            console.log("entro en skills");
            setSelectedPage("skills");
          }}
        >
          <Skills setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto">
        <motion.div
          onViewportEnter={() => {
            console.log("entro en projects");
            setSelectedPage("projects");
          }}
        >
          {/* <Projects setSelectedPage={setSelectedPage} /> */}
        </motion.div>
      </div>
    </div>
  );
}

export default App;
