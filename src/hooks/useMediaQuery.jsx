import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  // Estado local para almacenar el resultado de la consulta de medios
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Crear un objeto MediaQueryList basado en la consulta proporcionada
    const media = window.matchMedia(query);
    // Comprobar si la coincidencia actual es diferente del estado y actualizar si es necesario
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Función de escucha que se ejecuta cuando cambia el estado de la consulta de medios
    const listener = () => setMatches(media.matches);
    // Agregar un evento de escucha para el cambio de tamaño de la ventana
    window.addEventListener("resize", listener);
    // Devolver una función de limpieza que eliminará el evento de escucha cuando el componente se desmonte
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  // Devolver el resultado de la consulta de medios actual
  return matches;
};

// Este hook es útil para realizar acciones condicionales en el componente basadas en el tamaño de la pantalla u otras propiedades de la ventana del navegador.

export default useMediaQuery;
