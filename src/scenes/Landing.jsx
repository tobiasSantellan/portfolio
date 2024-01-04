import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaActions";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      //id="home"
      className=" md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGEN SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
           before:w-full before:max-w-[400px]  before:h-full before:border-2 before:border-green before:z-[-1]"
          >
            <img
              alt="profile"
              className=" hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[500px] drop-shadow-custom "
              src="assets/profile-image.png"
            />
          </div>
        ) : (
          <div>
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[500px] drop-shadow-custom ;"
              src="assets/bannerImageAnimated.svg"
            />
          </div>
        )}
      </div>
      {/* MAIN SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* ENCABEZADOS */}
        <motion.div
          initial="hidden" // Define el estado inicial de la animación como "hidden". Este estado corresponde a las propiedades definidas en el objeto variants bajo la clave "hidden".
          whileInView="visible" // Utiliza la propiedad whileInView para activar la animación cuando el elemento está en la vista del usuario. En este caso, la animación se activa cuando el elemento está visible en la pantalla.
          viewport={{ once: true, amount: 0.5 }} // Configura la vista del puerto (viewport) para la animación. once: true significa que la animación solo ocurrirá una vez, y amount: 0.5 especifica que se activará cuando el elemento esté al menos 50% visible en la pantalla.
          transition={{ duration: 1 }} // Define la duración de la transición de la animación en segundos. En este caso, la duración es de 0.5 segundos.
          variants={{
            // Define los diferentes estados de la animación. En este caso, hay dos estados: "hidden" y "visible". Cada estado tiene un objeto con propiedades de estilo que cambiarán durante la animación.
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-4xl font-opensans z-10 text-center md:text-start ">
            Tobias Santellan {""}
            <span
              className="xs:relative text-secondgreen xs:font-semibold z-20 
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1] text-5xl"
            >
              Frontend developer
            </span>
          </p>
          <p className="mt-10 mb-7 text-lg text-center md:text-start">
            My name is Tobias Santellan. Passionate about what I do and very
            focused on continuing to develop my skills day by day. Always ready
            for any situation in which I can contribute with my knowledge and
            learn something new.
          </p>
        </motion.div>

        {/* LLAMADO A ACCIONES */}

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainbow text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div
              className=" bg-gradient-rainblue  text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            >
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
